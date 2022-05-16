export interface IQuiz {
  type: "shuffleLetters" | "shuffleIdiom" | "fillIdiom";
  content: string;
  answer: string;
  explaination?: string;
  choices?: string[];
  info?: string;
  levelId?: string;
  levelNumber?: number;
}
