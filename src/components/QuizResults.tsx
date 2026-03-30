'use client';

import { QuizResult } from '@/types';
import Link from 'next/link';

interface QuizResultsProps {
  result: QuizResult;
  passMark?: number;
  onTryAgain: () => void;
  backUrl: string;
  backLabel?: string;
}

export function QuizResults({
  result,
  passMark = 75,
  onTryAgain,
  backUrl,
  backLabel = 'Back',
}: QuizResultsProps) {
  const passed = result.score >= passMark;
  const wrongAnswers = result.answers.filter((a) => !a.correct);

  // Group wrong answers by subject
  const wrongBySubject: Record<string, number> = {};
  wrongAnswers.forEach((answer) => {
    const question = result.questions.find((q) => q.id === answer.questionId);
    if (question) {
      wrongBySubject[question.subjectId] = (wrongBySubject[question.subjectId] || 0) + 1;
    }
  });

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white border border-slate-200 rounded-lg p-5 md:p-8 mb-4 md:mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 md:mb-6 text-center">Quiz Complete!</h2>

        <div
          className={`text-center py-6 md:py-8 px-4 md:px-6 rounded-lg mb-4 md:mb-6 ${
            passed ? 'bg-green-50 border-2 border-green-500' : 'bg-red-50 border-2 border-red-500'
          }`}
        >
          <div className="text-5xl md:text-6xl font-bold mb-2" style={{ color: passed ? '#10b981' : '#ef4444' }}>
            {result.score}%
          </div>
          <div className="text-lg md:text-xl font-semibold" style={{ color: passed ? '#10b981' : '#ef4444' }}>
            {passed ? 'PASSED' : 'FAILED'}
          </div>
          <div className="text-sm text-slate-600 mt-2">
            Pass mark: {passMark}%
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-6">
          <div className="text-center p-3 md:p-4 bg-slate-50 rounded-lg">
            <div className="text-xl md:text-2xl font-bold text-slate-900">{result.totalQuestions}</div>
            <div className="text-xs md:text-sm text-slate-600">Total</div>
          </div>
          <div className="text-center p-3 md:p-4 bg-green-50 rounded-lg">
            <div className="text-xl md:text-2xl font-bold text-green-600">{result.correctCount}</div>
            <div className="text-xs md:text-sm text-slate-600">Correct</div>
          </div>
          <div className="text-center p-3 md:p-4 bg-red-50 rounded-lg">
            <div className="text-xl md:text-2xl font-bold text-red-600">
              {result.totalQuestions - result.correctCount}
            </div>
            <div className="text-xs md:text-sm text-slate-600">Wrong</div>
          </div>
        </div>

        {Object.keys(wrongBySubject).length > 0 && (
          <div className="mb-6">
            <h3 className="font-semibold text-slate-900 mb-3">Areas to review:</h3>
            <div className="space-y-2">
              {Object.entries(wrongBySubject).map(([subjectId, count]) => (
                <div key={subjectId} className="flex items-center justify-between text-sm">
                  <span className="text-slate-700 capitalize">
                    {subjectId.replace(/-/g, ' ')}
                  </span>
                  <span className="text-red-600 font-medium">{count} incorrect</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {wrongAnswers.length > 0 && (
        <div className="bg-white border border-slate-200 rounded-lg p-4 md:p-6 mb-4 md:mb-6">
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 md:mb-4">Review Incorrect Answers</h3>
          <div className="space-y-6">
            {wrongAnswers.map((answer) => {
              const question = result.questions.find((q) => q.id === answer.questionId);
              if (!question) return null;

              const selectedOption = question.options.find((o) => o.id === answer.selectedAnswer);
              const correctOption = question.options.find(
                (o) => o.id === question.correctAnswer
              );

              return (
                <div key={answer.questionId} className="border-b border-slate-200 pb-6 last:border-0">
                  <p className="font-semibold text-slate-900 mb-3">{question.stem}</p>
                  <div className="space-y-2 mb-3">
                    <div className="flex items-start">
                      <span className="text-red-600 font-semibold mr-2">✗</span>
                      <span className="text-slate-700">
                        Your answer: <span className="font-medium">{selectedOption?.text}</span>
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 font-semibold mr-2">✓</span>
                      <span className="text-slate-700">
                        Correct answer: <span className="font-medium">{correctOption?.text}</span>
                      </span>
                    </div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <p className="text-sm text-slate-700">{question.explanation}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-3 md:space-x-4">
        <button
          onClick={onTryAgain}
          className="flex-1 px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
        >
          Try Again
        </button>
        <Link
          href={backUrl}
          className="flex-1 px-6 py-3 bg-slate-200 text-slate-900 rounded-lg font-medium hover:bg-slate-300 transition-colors text-center"
        >
          {backLabel}
        </Link>
      </div>
    </div>
  );
}
