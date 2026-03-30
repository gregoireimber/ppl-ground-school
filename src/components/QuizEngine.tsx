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

  // Handle empty questions array
  if (questions.length === 0) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-lg p-8 text-center">
          <p className="text-slate-600">No questions available for this quiz.</p>
        </div>
      </div>
    );
  }

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
      <div className="mb-4 md:mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">{title}</h2>
        <div className="flex items-center justify-between text-xs md:text-sm text-slate-600">
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

      <div className="bg-white border border-slate-200 rounded-lg p-4 md:p-6 mb-4 md:mb-6">
        <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-4 md:mb-6">
          {currentQuestion.stem}
        </h3>

        <div className="space-y-2 md:space-y-3">
          {currentQuestion.options.map((option) => {
            const isSelected = selectedAnswer === option.id;
            const isCorrect = option.id === currentQuestion.correctAnswer;
            const showCorrect = isAnswerRevealed && isCorrect;
            const showIncorrect = isAnswerRevealed && isSelected && !isCorrect;

            let cardClasses =
              'p-3 md:p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ';

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
                <div className="flex items-start">
                  <span className="font-semibold text-slate-700 mr-2 md:mr-3 shrink-0">
                    {option.id.toUpperCase()}.
                  </span>
                  <span className="text-sm md:text-base text-slate-900">{option.text}</span>
                  {showCorrect && (
                    <span className="ml-auto text-green-600 font-semibold text-xs md:text-sm shrink-0">&check; Correct</span>
                  )}
                  {showIncorrect && (
                    <span className="ml-auto text-red-600 font-semibold text-xs md:text-sm shrink-0">&cross; Wrong</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {isAnswerRevealed && (
          <div className="mt-4 md:mt-6 p-3 md:p-4 bg-slate-50 border border-slate-200 rounded-lg">
            <h4 className="font-semibold text-slate-900 mb-1 md:mb-2 text-sm md:text-base">Explanation:</h4>
            <p className="text-sm md:text-base text-slate-700">{currentQuestion.explanation}</p>
          </div>
        )}
      </div>

      <div className="flex justify-end">
        {!isAnswerRevealed ? (
          <button
            onClick={handleCheckAnswer}
            disabled={!selectedAnswer}
            className="w-full md:w-auto px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors"
          >
            Check Answer
          </button>
        ) : (
          <button
            onClick={handleNextQuestion}
            className="w-full md:w-auto px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            {isLastQuestion ? 'View Results' : 'Next Question →'}
          </button>
        )}
      </div>
    </div>
  );
}
