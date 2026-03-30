import { Lesson } from '@/types';
import { rulesOfTheAirBasics } from './air-law/rules-of-the-air-basics';

// Lesson registry - all lessons indexed by ID
const lessonRegistry: Record<string, Lesson> = {
  'rules-of-the-air-basics': rulesOfTheAirBasics,
  // Add more lessons here as they're created
};

export function getLessonById(lessonId: string): Lesson | undefined {
  return lessonRegistry[lessonId];
}

export function getAllLessons(): Lesson[] {
  return Object.values(lessonRegistry);
}

// Export individual lessons for direct import if needed
export { rulesOfTheAirBasics };
