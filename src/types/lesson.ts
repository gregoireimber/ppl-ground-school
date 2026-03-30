export type ContentBlock =
  | { type: 'heading'; level: 1 | 2 | 3; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; ordered: boolean; items: string[] }
  | { type: 'callout'; variant: 'info' | 'warning' | 'tip'; text: string }
  | { type: 'image'; src: string; alt: string; caption?: string };

export interface Lesson {
  id: string;
  topicId: string;
  title: string;
  content: ContentBlock[];
  keyPoints: string[];
  practiceQuestions: string[]; // Question IDs
}
