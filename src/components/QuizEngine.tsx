'use client';

import { useState } from 'react';
import { Question, QuizResult, QuizAnswer } from '@/types';

interface QuizEngineProps {
  questions: Question[];
  onComplete: (result: QuizResult) => void;
  title?: string;
}

export function QuizEngine({ questions, onComplete, title = 'Quiz' }: QuizEngineProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [startTime] = useState(new Date().toISOString());

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;

  const handleOptionClick = (optionId: string) => {
    if (!isAnswerRevealed) {
      setSelectedAnswer(optionId);
    }
  };

  const handleCheckAnswer = () => {
    if (!selectedAnswer) return;

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    const newAnswer: QuizAnswer = {
      questionId: currentQuestion.id,
      selectedAnswer,
      correct: isCorrect,
    };

    setAnswers([...answers, newAnswer]);
    setIsAnswerRevealed(true);
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      // Complete the quiz
      const allAnswers = [...answers];
      const correctCount = allAnswers.filter((a) => a.correct).length;
      const score = Math.round((correctCount / questions.length) * 100);

      const result: QuizResult = {
        questions,
        answers: allAnswers,
        score,
        totalQuestions: questions.length,
        correctCount,
        timeStarted: startTime,
        timeCompleted: new Date().toISOString(),
      };

      onComplete(result);
    } else {
      // Move to next question
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setIsAnswerRevealed(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">{title}</h2>
        <div className="flex items-center justify-between text-sm text-slate-600">
          <span>
            Question {currentIndex + 1} of {questions.length}
          </span>
          <span>
            Progress: {Math.round(((currentIndex + 1) / questions.length) * 100)}%
          </span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
          <div
            className="bg-primary-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-6">
          {currentQuestion.stem}
        </h3>

        <div className="space-y-3">
          {currentQuestion.options.map((option) => {
            const isSelected = selectedAnswer === option.id;
            const isCorrect = option.id === currentQuestion.correctAnswer;
            const showCorrect = isAnswerRevealed && isCorrect;
            const showIncorrect = isAnswerRevealed && isSelected && !isCorrect;

            let cardClasses =
              'p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ';

            if (showCorrect) {
              cardClasses += 'border-green-500 bg-green-50';
            } else if (showIncorrect) {
              cardClasses += 'border-red-500 bg-red-50';
            } else if (isSelected) {
              cardClasses += 'border-primary-500 bg-primary-50';
            } else {
              cardClasses += 'border-slate-200 hover:border-primary-300 hover:bg-slate-50';
            }

            if (isAnswerRevealed) {
              cardClasses += ' cursor-default';
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
                  {showCorrect && (
                    <span className="ml-auto text-green-600 font-semibold">✓ Correct</span>
                  )}
                  {showIncorrect && (
                    <span className="ml-auto text-red-600 font-semibold">✗ Incorrect</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {isAnswerRevealed && (
          <div className="mt-6 p-4 bg-slate-50 border border-slate-200 rounded-lg">
            <h4 className="font-semibold text-slate-900 mb-2">Explanation:</h4>
            <p className="text-slate-700">{currentQuestion.explanation}</p>
          </div>
        )}
      </div>

      <div className="flex justify-end">
        {!isAnswerRevealed ? (
          <button
            onClick={handleCheckAnswer}
            disabled={!selectedAnswer}
            className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors"
          >
            Check Answer
          </button>
        ) : (
          <button
            onClick={handleNextQuestion}
            className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            {isLastQuestion ? 'View Results' : 'Next Question →'}
          </button>
        )}
      </div>
    </div>
  );
}
