'use client';

import { use, useState, useEffect } from 'react';
import { QuizEngine } from '@/components/QuizEngine';
import { QuizResults } from '@/components/QuizResults';
import { Question, QuizResult } from '@/types';
import { getQuestionsBySubject } from '@/data/questions';
import { getSubjectById } from '@/data/subjects';
import { randomSample, shuffle } from '@/lib/shuffle';
import { recordQuizAttempt } from '@/lib/progress';
import Link from 'next/link';

const MAX_QUESTIONS_PER_QUIZ = 20;

export default function SubjectQuizPage({
  params,
}: {
  params: Promise<{ subjectId: string }>;
}) {
  const { subjectId } = use(params);
  const subject = getSubjectById(subjectId);
  const [quizQuestions, setQuizQuestions] = useState<Question[] | null>(null);
  const [result, setResult] = useState<QuizResult | null>(null);

  const initializeQuiz = () => {
    const allSubjectQuestions = getQuestionsBySubject(subjectId);

    // Select questions (all if fewer than 20, or random 20 if more)
    const selectedQuestions =
      allSubjectQuestions.length <= MAX_QUESTIONS_PER_QUIZ
        ? allSubjectQuestions
        : randomSample(allSubjectQuestions, MAX_QUESTIONS_PER_QUIZ);

    // Shuffle the questions and also shuffle options within each question
    const shuffledQuestions = shuffle(
      selectedQuestions.map((q) => ({
        ...q,
        options: shuffle([...q.options]),
      }))
    );

    setQuizQuestions(shuffledQuestions);
    setResult(null);
  };

  useEffect(() => {
    initializeQuiz();
  }, [subjectId]);

  if (!subject) {
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-slate-900">Subject not found</h1>
      </div>
    );
  }

  const handleQuizComplete = (quizResult: QuizResult) => {
    recordQuizAttempt(subjectId, {
      score: quizResult.score,
      questionsAttempted: quizResult.totalQuestions,
      correctAnswers: quizResult.correctCount,
    });

    setResult(quizResult);
  };

  const handleTryAgain = () => {
    initializeQuiz();
  };

  if (!quizQuestions) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center py-12">
          <div className="text-slate-600">Loading quiz...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Link
          href={`/subjects/${subjectId}`}
          className="text-sm text-primary-600 hover:text-primary-700 font-medium"
        >
          ← Back to {subject.name}
        </Link>
      </div>

      {!result ? (
        <>
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">{subject.name} Quiz</h1>
            <p className="text-lg text-slate-600">
              Test your knowledge with {quizQuestions.length} questions on {subject.name}
            </p>
          </div>
          <QuizEngine
            questions={quizQuestions}
            onComplete={handleQuizComplete}
            title={`${subject.name} Quiz`}
          />
        </>
      ) : (
        <>
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-slate-900">{subject.name} Quiz Results</h1>
          </div>
          <QuizResults
            result={result}
            passMark={subject.examInfo.passMark}
            onTryAgain={handleTryAgain}
            backUrl={`/subjects/${subjectId}`}
            backLabel={`Back to ${subject.name}`}
          />
        </>
      )}
    </div>
  );
}
