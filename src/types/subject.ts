import { Topic } from './topic';

export interface ExamInfo {
  questionCount: number;
  timeLimit: number; // minutes
  passMark: number; // percentage
}

export interface Subject {
  id: string;
  name: string;
  description: string;
  examInfo: ExamInfo;
  topics: Topic[];
}
