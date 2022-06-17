export interface IQuiz {
  type: "shuffleLetters" | "shuffleIdiom" | "multipleChoice";
  content: string;
  answer: string;
  explaination?: string;
  choices?: string[];
  info?: string;
  levelId?: number;
  levelNumber?: number;
  language: "en" | "vi";
}

export interface ILevel {
  levelNumber: number;
  quizIds: string[];
}
