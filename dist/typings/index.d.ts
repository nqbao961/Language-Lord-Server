export declare type Languages = 'en' | 'vi';
export declare type QuizTypes = 'shuffleLetters' | 'shuffleIdiom' | 'multipleChoice';
export declare type jwtPayload = {
    userInfo: {
        email: string;
        name: string;
    };
    sub: string;
};
