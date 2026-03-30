import { UserProgress, SubjectProgress, QuizAttempt, LessonProgress } from '@/types';

const PROGRESS_KEY = 'ppl-progress';

export function getProgress(): UserProgress {
  if (typeof window === 'undefined') {
    return { subjects: [], lastUpdated: new Date().toISOString() };
  }

  const stored = localStorage.getItem(PROGRESS_KEY);
  if (!stored) {
    return { subjects: [], lastUpdated: new Date().toISOString() };
  }

  try {
    return JSON.parse(stored) as UserProgress;
  } catch {
    return { subjects: [], lastUpdated: new Date().toISOString() };
  }
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return;

  progress.lastUpdated = new Date().toISOString();
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}

export function getSubjectProgress(subjectId: string): SubjectProgress | undefined {
  const progress = getProgress();
  return progress.subjects.find((s) => s.subjectId === subjectId);
}

export function markLessonComplete(
  subjectId: string,
  topicId: string,
  lessonId: string
): void {
  const progress = getProgress();
  let subjectProgress = progress.subjects.find((s) => s.subjectId === subjectId);

  if (!subjectProgress) {
    subjectProgress = {
      subjectId,
      lessonsCompleted: [],
      quizAttempts: [],
      mockExamAttempts: [],
    };
    progress.subjects.push(subjectProgress);
  }

  const existing = subjectProgress.lessonsCompleted.find((l) => l.lessonId === lessonId);
  if (existing) {
    existing.completed = true;
    existing.lastStudied = new Date().toISOString();
  } else {
    subjectProgress.lessonsCompleted.push({
      lessonId,
      completed: true,
      lastStudied: new Date().toISOString(),
    });
  }

  subjectProgress.lastStudied = new Date().toISOString();
  saveProgress(progress);
}

export function recordQuizAttempt(
  subjectId: string,
  attempt: Omit<QuizAttempt, 'date'>,
  isMockExam = false
): void {
  const progress = getProgress();
  let subjectProgress = progress.subjects.find((s) => s.subjectId === subjectId);

  if (!subjectProgress) {
    subjectProgress = {
      subjectId,
      lessonsCompleted: [],
      quizAttempts: [],
      mockExamAttempts: [],
    };
    progress.subjects.push(subjectProgress);
  }

  const attemptWithDate: QuizAttempt = {
    ...attempt,
    date: new Date().toISOString(),
  };

  if (isMockExam) {
    subjectProgress.mockExamAttempts.push(attemptWithDate);
  } else {
    subjectProgress.quizAttempts.push(attemptWithDate);
  }

  subjectProgress.lastStudied = new Date().toISOString();
  saveProgress(progress);
}

export function getLessonProgress(lessonId: string): LessonProgress | undefined {
  const progress = getProgress();
  for (const subject of progress.subjects) {
    const lesson = subject.lessonsCompleted.find((l) => l.lessonId === lessonId);
    if (lesson) return lesson;
  }
  return undefined;
}

export function calculateSubjectCompletion(
  subjectId: string,
  totalLessons: number
): number {
  const subjectProgress = getSubjectProgress(subjectId);
  if (!subjectProgress || totalLessons === 0) return 0;

  const completed = subjectProgress.lessonsCompleted.filter((l) => l.completed).length;
  return Math.round((completed / totalLessons) * 100);
}
