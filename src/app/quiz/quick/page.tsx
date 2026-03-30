'use client';

import { useState, useEffect } from 'react';
import { QuizEngine } from '@/components/QuizEngine';
import { QuizResults } from '@/components/QuizResults';
import { Question, QuizResult } from '@/types';
import { getAllQuestions } from '@/data/questions';
import { randomSample, shuffle } from '@/lib/shuffle';
import { recordQuizAttempt } from '@/lib/progress';
import Link from 'next/link';

const QUESTIONS_PER_QUIZ = 10;

export default function QuickQuizPage() {
  const [quizQuestions, setQuizQuestions] = useState<Question[] | null>(null);
  const [result, setResult] = useState<QuizResult | null>(null);

  const initializeQuiz = () => {
    const allQuestions = getAllQuestions();

    if (allQuestions.length === 0) {
      setQuizQuestions([]);
      return;
    }

    const selectedQuestions = randomSample(allQuestions, QUESTIONS_PER_QUIZ);

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
  }, []);

  const handleQuizComplete = (quizResult: QuizResult) => {
    // Record the attempt (use 'general' as subject ID for quick quiz)
    recordQuizAttempt('general', {
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
          href="/"
          className="text-sm text-primary-600 hover:text-primary-700 font-medium"
        >
          ← Back to Dashboard
        </Link>
      </div>

      {!result ? (
        <>
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Quick Quiz</h1>
            <p className="text-lg text-slate-600">
              Test your knowledge with {QUESTIONS_PER_QUIZ} random questions from across all subjects
            </p>
          </div>
          <QuizEngine
            questions={quizQuestions}
            onComplete={handleQuizComplete}
            title="Quick Quiz"
          />
        </>
      ) : (
        <>
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-slate-900">Quick Quiz Results</h1>
          </div>
          <QuizResults
            result={result}
            passMark={75}
            onTryAgain={handleTryAgain}
            backUrl="/"
            backLabel="Back to Dashboard"
          />
        </>
      )}
    </div>
  );
}
