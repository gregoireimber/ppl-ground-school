export interface QuestionOption {
  id: string; // 'a', 'b', 'c', 'd'
  text: string;
}

export interface Question {
  id: string;
  subjectId: string;
  topicId?: string;
  stem: string; // The question text
  options: QuestionOption[];
  correctAnswer: string; // Option ID
  explanation: string; // Why this answer is correct
  difficulty: 'easy' | 'medium' | 'hard';
  tags: string[]; // e.g., ['VFR', 'airspace', 'regulations']
}
