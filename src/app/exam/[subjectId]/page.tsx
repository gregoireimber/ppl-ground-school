'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { getSubjectById } from '@/data/subjects';
import { getQuestionsBySubject } from '@/data/questions';
import { ExamEngine } from '@/components/ExamEngine';
import { QuizResult, Question } from '@/types';
import { randomSample, shuffle } from '@/lib/shuffle';
import { recordQuizAttempt } from '@/lib/progress';

export default function ExamPage() {
  const params = useParams();
  const router = useRouter();
  const subjectId = params.subjectId as string;

  const [examStarted, setExamStarted] = useState(false);
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [examResult, setExamResult] = useState<QuizResult | null>(null);

  const subject = getSubjectById(subjectId);

  useEffect(() => {
    if (!subject) return;

    // Get all questions for this subject
    const allQuestions = getQuestionsBySubject(subjectId);

    // Randomly select the required number of questions
    const selected = randomSample(allQuestions, subject.examInfo.questionCount);

    // Shuffle the questions and shuffle options within each question
    const shuffledQuestions = shuffle(selected).map((q) => ({
      ...q,
      options: shuffle([...q.options]),
    }));

    setExamQuestions(shuffledQuestions);
  }, [subject, subjectId]);

  if (!subject) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-lg p-8 text-center">
          <p className="text-slate-600">Subject not found.</p>
        </div>
      </div>
    );
  }

  const handleExamComplete = (result: QuizResult) => {
    setExamResult(result);

    // Record the attempt
    recordQuizAttempt(
      subjectId,
      {
        score: result.score,
        questionsAttempted: result.totalQuestions,
        correctAnswers: result.correctCount,
      },
      true // isMockExam = true
    );
  };

  const handleRetake = () => {
    // Reload the page to get new questions
    router.refresh();
    setExamStarted(false);
    setExamResult(null);
  };

  // Show start screen
  if (!examStarted && !examResult) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-lg p-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            {subject.name} - Mock Exam
          </h1>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h2 className="font-semibold text-blue-900 mb-3">Exam Information</h2>
            <div className="space-y-2 text-blue-800">
              <div className="flex justify-between">
                <span>Questions:</span>
                <span className="font-medium">{subject.examInfo.questionCount}</span>
              </div>
              <div className="flex justify-between">
                <span>Time limit:</span>
                <span className="font-medium">{subject.examInfo.timeLimit} minutes</span>
              </div>
              <div className="flex justify-between">
                <span>Pass mark:</span>
                <span className="font-medium">{subject.examInfo.passMark}%</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-slate-900 mb-3">Instructions</h3>
            <ul className="text-sm text-slate-700 space-y-2">
              <li>• Answer all questions within the time limit</li>
              <li>• You can navigate between questions and change your answers</li>
              <li>• Flag questions to review later if unsure</li>
              <li>• The exam will auto-submit when the timer expires</li>
              <li>• No answers are revealed until you submit</li>
            </ul>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => router.push('/exam')}
              className="px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors"
            >
              Back to Exam Selection
            </button>
            <button
              onClick={() => setExamStarted(true)}
              className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              Start Exam
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Show exam results
  if (examResult) {
    const passed = examResult.score >= subject.examInfo.passMark;
    const timeSpent = Math.round(
      (new Date(examResult.timeCompleted).getTime() -
        new Date(examResult.timeStarted).getTime()) /
        1000 /
        60
    );

    // Group wrong answers by topic
    const wrongAnswersByTopic: Record<string, number> = {};
    examResult.answers.forEach((answer, idx) => {
      if (!answer.correct) {
        const question = examResult.questions[idx];
        const topicId = question.topicId || 'unknown';
        wrongAnswersByTopic[topicId] = (wrongAnswersByTopic[topicId] || 0) + 1;
      }
    });

    return (
      <div className="max-w-4xl mx-auto">
        {/* Results header */}
        <div className="bg-white border border-slate-200 rounded-lg p-8 mb-6">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Exam Complete!</h1>
            <p className="text-slate-600">{subject.name}</p>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="text-center">
              <div
                className={`text-5xl font-bold mb-2 ${
                  passed ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {examResult.score}%
              </div>
              <div
                className={`text-lg font-semibold ${
                  passed ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {passed ? 'PASS' : 'FAIL'}
              </div>
              <div className="text-sm text-slate-600 mt-1">
                Pass mark: {subject.examInfo.passMark}%
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600">Correct answers:</span>
                <span className="font-medium text-slate-900">
                  {examResult.correctCount} / {examResult.totalQuestions}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Time spent:</span>
                <span className="font-medium text-slate-900">
                  {timeSpent} / {subject.examInfo.timeLimit} minutes
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Questions attempted:</span>
                <span className="font-medium text-slate-900">
                  {examResult.answers.filter((a) => a.selectedAnswer).length} /{' '}
                  {examResult.totalQuestions}
                </span>
              </div>
            </div>
          </div>

          {Object.keys(wrongAnswersByTopic).length > 0 && (
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-orange-900 mb-2">Areas for Review</h3>
              <div className="text-sm text-orange-800">
                {Object.entries(wrongAnswersByTopic).map(([topicId, count]) => (
                  <div key={topicId} className="flex justify-between py-1">
                    <span>Topic: {topicId}</span>
                    <span className="font-medium">{count} incorrect</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-4">
            <button
              onClick={() => router.push('/exam')}
              className="px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors"
            >
              Back to Exam Selection
            </button>
            <button
              onClick={() => router.push(`/subjects/${subjectId}`)}
              className="px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors"
            >
              View Subject
            </button>
            <button
              onClick={handleRetake}
              className="ml-auto px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              Retake Exam
            </button>
          </div>
        </div>

        {/* All questions with answers */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Review All Questions</h2>

          {examResult.questions.map((question, idx) => {
            const answer = examResult.answers[idx];
            const isCorrect = answer.correct;

            return (
              <div
                key={question.id}
                className={`bg-white border-2 rounded-lg p-6 ${
                  isCorrect ? 'border-green-200' : 'border-red-200'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="text-sm text-slate-600 mb-2">Question {idx + 1}</div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {question.stem}
                    </h3>
                  </div>
                  <div
                    className={`ml-4 px-3 py-1 rounded-full text-sm font-semibold ${
                      isCorrect
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  {question.options.map((option) => {
                    const isUserAnswer = answer.selectedAnswer === option.id;
                    const isCorrectAnswer = option.id === question.correctAnswer;

                    let cardClasses = 'p-3 border-2 rounded-lg ';

                    if (isCorrectAnswer) {
                      cardClasses += 'border-green-500 bg-green-50';
                    } else if (isUserAnswer && !isCorrect) {
                      cardClasses += 'border-red-500 bg-red-50';
                    } else {
                      cardClasses += 'border-slate-200';
                    }

                    return (
                      <div key={option.id} className={cardClasses}>
                        <div className="flex items-center">
                          <span className="font-semibold text-slate-700 mr-3">
                            {option.id.toUpperCase()}.
                          </span>
                          <span className="text-slate-900">{option.text}</span>
                          {isCorrectAnswer && (
                            <span className="ml-auto text-green-600 font-semibold">
                              ✓ Correct Answer
                            </span>
                          )}
                          {isUserAnswer && !isCorrect && (
                            <span className="ml-auto text-red-600 font-semibold">
                              Your Answer
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Explanation:</h4>
                  <p className="text-slate-700">{question.explanation}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Show exam engine
  return (
    <ExamEngine
      questions={examQuestions}
      timeLimit={subject.examInfo.timeLimit}
      passMark={subject.examInfo.passMark}
      onComplete={handleExamComplete}
      subjectName={subject.name}
    />
  );
}
