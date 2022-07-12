import { Quiz } from '../entities/quiz.entity';
export declare class GetQuizzesDto {
    notInLevel?: boolean;
    lang?: Quiz['language'];
}
