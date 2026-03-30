export interface LessonProgress {
  lessonId: string;
  completed: boolean;
  lastStudied: string; // ISO date
}

export interface QuizAttempt {
  date: string; // ISO date
  score: number; // percentage
  questionsAttempted: number;
  correctAnswers: number;
}

export interface SubjectProgress {
  subjectId: string;
  lessonsCompleted: LessonProgress[];
  quizAttempts: QuizAttempt[];
  mockExamAttempts: QuizAttempt[];
  lastStudied?: string; // ISO date
}

export interface UserProgress {
  subjects: SubjectProgress[];
  lastUpdated: string; // ISO date
}
