import { Lesson } from './lesson';

export interface Topic {
  id: string;
  subjectId: string;
  name: string;
  description: string;
  lessons: Lesson[];
}
