import { Question } from '@/types';
import { airLawQuestions } from './air-law';
import { operationalProceduresQuestions } from './operational-procedures';
import { humanPerformanceQuestions } from './human-performance';
import { navigationQuestions } from './navigation';
import { meteorologyQuestions } from './meteorology';

// All questions indexed by ID
const allQuestions = [
  ...airLawQuestions,
  ...operationalProceduresQuestions,
  ...humanPerformanceQuestions,
  ...navigationQuestions,
  ...meteorologyQuestions,
];

const questionRegistry: Record<string, Question> = {};
allQuestions.forEach((q) => {
  questionRegistry[q.id] = q;
});

export function getQuestionById(questionId: string): Question | undefined {
  return questionRegistry[questionId];
}

export function getQuestionsBySubject(subjectId: string): Question[] {
  return allQuestions.filter((q) => q.subjectId === subjectId);
}

export function getQuestionsByTopic(topicId: string): Question[] {
  return allQuestions.filter((q) => q.topicId === topicId);
}

export function getQuestionsByIds(questionIds: string[]): Question[] {
  return questionIds.map((id) => questionRegistry[id]).filter(Boolean);
}

export function getAllQuestions(): Question[] {
  return allQuestions;
}

// Export individual question sets for direct import if needed
export { airLawQuestions, operationalProceduresQuestions, humanPerformanceQuestions, navigationQuestions, meteorologyQuestions };
