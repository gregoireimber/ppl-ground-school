import { Question } from './question';

export interface QuizAnswer {
  questionId: string;
  selectedAnswer: string; // Option ID
  correct: boolean;
}

export interface QuizResult {
  questions: Question[];
  answers: QuizAnswer[];
  score: number; // percentage
  totalQuestions: number;
  correctCount: number;
  timeStarted: string; // ISO date
  timeCompleted: string; // ISO date
}
