export type Languages = 'en' | 'vi';

export type QuizTypes = 'shuffleLetters' | 'shuffleIdiom' | 'multipleChoice';

export type jwtPayload = {
  userInfo: {
    email: string;
    name: string;
  };
  sub: string;
};
