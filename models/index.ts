export interface IQuiz {
  type: "shuffleLetters" | "shuffleIdiom" | "fillIdiom";
  content: string;
  answer: string;
  explaination?: string;
  choices?: string[];
  info?: string;
  levelId?: number;
  levelNumber?: number;
}

export interface ILevel {
  levelNumber: number;
  quizIds: string[];
}
