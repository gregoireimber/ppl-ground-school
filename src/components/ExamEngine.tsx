'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Question, QuizResult, QuizAnswer } from '@/types';

interface ExamEngineProps {
  questions: Question[];
  timeLimit: number; // in minutes
  passMark: number; // percentage
  onComplete: (result: QuizResult) => void;
  subjectName: string;
}

export function ExamEngine({ questions, timeLimit, passMark, onComplete, subjectName }: ExamEngineProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Map<string, string>>(new Map());
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<string>>(new Set());
  const [timeRemaining, setTimeRemaining] = useState(timeLimit * 60); // convert to seconds
  const [startTime] = useState(new Date().toISOString());
  const [showSubmitDialog, setShowSubmitDialog] = useState(false);
  const [showReviewPanel, setShowReviewPanel] = useState(false);
  const hasSubmittedRef = useRef(false);

  // Handle empty questions array
  if (questions.length === 0) {
    return (
      <div className="max-w-5xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-lg p-8 text-center">
          <p className="text-slate-600">No questions available for this exam.</p>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  // Memoized submit function to prevent double submit
  const submitExam = useCallback(() => {
    // Prevent double submission
    if (hasSubmittedRef.current) return;
    hasSubmittedRef.current = true;

    const quizAnswers: QuizAnswer[] = questions.map((q) => {
      const selectedAnswer = answers.get(q.id) || '';
      return {
        questionId: q.id,
        selectedAnswer,
        correct: selectedAnswer === q.correctAnswer,
      };
    });

    const correctCount = quizAnswers.filter((a) => a.correct).length;
    const score = Math.round((correctCount / questions.length) * 100);

    const result: QuizResult = {
      questions,
      answers: quizAnswers,
      score,
      totalQuestions: questions.length,
      correctCount,
      timeStarted: startTime,
      timeCompleted: new Date().toISOString(),
    };

    onComplete(result);
  }, [questions, answers, startTime, onComplete]);

  // Timer countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          submitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [submitExam]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const isTimeLow = timeRemaining < 300; // less than 5 minutes

  const handleOptionClick = (optionId: string) => {
    const newAnswers = new Map(answers);
    newAnswers.set(currentQuestion.id, optionId);
    setAnswers(newAnswers);
  };

  const handleToggleFlag = () => {
    const newFlagged = new Set(flaggedQuestions);
    if (newFlagged.has(currentQuestion.id)) {
      newFlagged.delete(currentQuestion.id);
    } else {
      newFlagged.add(currentQuestion.id);
    }
    setFlaggedQuestions(newFlagged);
  };

  const handleQuestionJump = (index: number) => {
    setCurrentIndex(index);
    setShowReviewPanel(false);
  };

  const getUnansweredCount = (): number => {
    return questions.filter((q) => !answers.has(q.id)).length;
  };

  const handleSubmitClick = () => {
    setShowSubmitDialog(true);
  };

  const handleConfirmSubmit = () => {
    setShowSubmitDialog(false);
    submitExam();
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header with timer */}
      <div className="sticky top-0 z-10 bg-white border-b border-slate-200 pb-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">{subjectName} - Mock Exam</h2>
            <p className="text-sm text-slate-600">
              {questions.length} questions • Pass mark: {passMark}%
            </p>
          </div>
          <div className="text-right">
            <div
              className={`text-3xl font-bold ${
                isTimeLow ? 'text-red-600 animate-pulse' : 'text-slate-900'
              }`}
            >
              {formatTime(timeRemaining)}
            </div>
            <p className="text-sm text-slate-600">Time remaining</p>
          </div>
        </div>

        {/* Question navigation */}
        <div className="flex flex-wrap gap-2 mb-4">
          {questions.map((q, idx) => {
            const isAnswered = answers.has(q.id);
            const isFlagged = flaggedQuestions.has(q.id);
            const isCurrent = idx === currentIndex;

            let btnClasses =
              'w-10 h-10 rounded-full font-semibold transition-all duration-200 ';

            if (isCurrent) {
              btnClasses += 'ring-2 ring-primary-500 ring-offset-2 ';
            }

            if (isFlagged) {
              btnClasses += 'border-2 border-orange-500 ';
            } else {
              btnClasses += 'border-2 border-slate-300 ';
            }

            if (isAnswered) {
              btnClasses += 'bg-primary-600 text-white ';
            } else {
              btnClasses += 'bg-white text-slate-700 hover:bg-slate-50 ';
            }

            return (
              <button
                key={q.id}
                onClick={() => handleQuestionJump(idx)}
                className={btnClasses}
                title={`Question ${idx + 1}${isFlagged ? ' (flagged)' : ''}${
                  isAnswered ? ' (answered)' : ''
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => setShowReviewPanel(!showReviewPanel)}
            className="px-4 py-2 border-2 border-slate-300 rounded-lg font-medium text-slate-700 hover:bg-slate-50 transition-colors"
          >
            {showReviewPanel ? 'Hide' : 'Show'} Review Panel
          </button>
          <button
            onClick={handleSubmitClick}
            className="ml-auto px-6 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Submit Exam
          </button>
        </div>
      </div>

      {/* Review panel */}
      {showReviewPanel && (
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-slate-900 mb-3">Question Status</h3>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <span className="font-medium text-slate-700">Answered:</span>{' '}
              <span className="text-slate-900">{answers.size}</span>
            </div>
            <div>
              <span className="font-medium text-slate-700">Unanswered:</span>{' '}
              <span className="text-slate-900">{getUnansweredCount()}</span>
            </div>
            <div>
              <span className="font-medium text-slate-700">Flagged:</span>{' '}
              <span className="text-slate-900">{flaggedQuestions.size}</span>
            </div>
          </div>
        </div>
      )}

      {/* Question card */}
      <div className="bg-white border border-slate-200 rounded-lg p-6 mb-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="text-sm text-slate-600 mb-2">
              Question {currentIndex + 1} of {questions.length}
            </div>
            <h3 className="text-lg font-semibold text-slate-900">{currentQuestion.stem}</h3>
          </div>
          <button
            onClick={handleToggleFlag}
            className={`ml-4 p-2 rounded-lg transition-colors ${
              flaggedQuestions.has(currentQuestion.id)
                ? 'bg-orange-100 text-orange-600'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
            title={
              flaggedQuestions.has(currentQuestion.id)
                ? 'Remove flag'
                : 'Flag for review'
            }
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" />
            </svg>
          </button>
        </div>

        <div className="space-y-3 mt-6">
          {currentQuestion.options.map((option) => {
            const isSelected = answers.get(currentQuestion.id) === option.id;

            let cardClasses =
              'p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ';

            if (isSelected) {
              cardClasses += 'border-primary-500 bg-primary-50';
            } else {
              cardClasses += 'border-slate-200 hover:border-primary-300 hover:bg-slate-50';
            }

            return (
              <div
                key={option.id}
                onClick={() => handleOptionClick(option.id)}
                className={cardClasses}
              >
                <div className="flex items-center">
                  <span className="font-semibold text-slate-700 mr-3">
                    {option.id.toUpperCase()}.
                  </span>
                  <span className="text-slate-900">{option.text}</span>
                  {isSelected && (
                    <span className="ml-auto text-primary-600 font-semibold">Selected</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between">
        <button
          onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
          disabled={currentIndex === 0}
          className="px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          ← Previous
        </button>
        <button
          onClick={() =>
            setCurrentIndex(Math.min(questions.length - 1, currentIndex + 1))
          }
          disabled={currentIndex === questions.length - 1}
          className="px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Next →
        </button>
      </div>

      {/* Submit confirmation dialog */}
      {showSubmitDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Submit Exam?</h3>
            <p className="text-slate-700 mb-2">
              You are about to submit your exam. This action cannot be undone.
            </p>
            {getUnansweredCount() > 0 && (
              <p className="text-orange-600 font-medium mb-4">
                Warning: {getUnansweredCount()} question(s) are unanswered.
              </p>
            )}
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowSubmitDialog(false)}
                className="px-4 py-2 border-2 border-slate-300 rounded-lg font-medium text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmSubmit}
                className="px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
