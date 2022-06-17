export interface IQuiz {
  type: "shuffleLetters" | "shuffleIdiom" | "multipleChoice";
  content: string;
  answer: string;
  explaination?: string;
  choices?: string[];
  info?: string;
  levelId?: string;
  levelNumber?: number;
  language: "en" | "vi";
}

export interface ILevel {
  levelNumber: number;
  quizIds: string[];
  language: "en" | "vi";
}
