import { Languages, QuizTypes } from 'src/typings';

export class CreateQuizDto {
  type: QuizTypes;
  content: string;
  answer: string;
  explaination?: string;
  info?: string;
  choices?: string[];
  language: Languages;
}
