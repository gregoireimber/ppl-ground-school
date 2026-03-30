import { Lesson } from '@/types';
import { rulesOfTheAirBasics } from './air-law/rules-of-the-air-basics';
import { emergencyProceduresBasics } from './operational-procedures/emergency-procedures-basics';
import { aviationPhysiologyBasics } from './human-performance/aviation-physiology-basics';
import { deadReckoningBasics } from './navigation/dead-reckoning-basics';
import { weatherSystemsBasics } from './meteorology/weather-systems-basics';

// Lesson registry - all lessons indexed by ID
const lessonRegistry: Record<string, Lesson> = {
  'rules-of-the-air-basics': rulesOfTheAirBasics,
  'emergency-procedures-basics': emergencyProceduresBasics,
  'aviation-physiology-basics': aviationPhysiologyBasics,
  'dead-reckoning-basics': deadReckoningBasics,
  'weather-systems-basics': weatherSystemsBasics,
};

export function getLessonById(lessonId: string): Lesson | undefined {
  return lessonRegistry[lessonId];
}

export function getAllLessons(): Lesson[] {
  return Object.values(lessonRegistry);
}

// Export individual lessons for direct import if needed
export {
  rulesOfTheAirBasics,
  emergencyProceduresBasics,
  aviationPhysiologyBasics,
  deadReckoningBasics,
  weatherSystemsBasics
};
