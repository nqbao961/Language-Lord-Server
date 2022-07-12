import { Languages, QuizTypes } from 'src/typings';

export interface Quiz {
  type: QuizTypes;
  content: string;
  answer: string;
  explaination?: string;
  choices?: string[];
  info?: string;
  levelId?: string;
  levelNumber?: number;
  language: Languages;
}
