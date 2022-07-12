import { Quiz } from 'src/quizzes/entities/quiz.entity';
import { Languages } from 'src/typings';
export interface Level {
    levelNumber: number;
    quizList: Quiz[];
    language: Languages;
}
