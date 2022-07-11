import { Quiz } from '../entities/quiz.entity';

export class GetQuizzesDto {
  notInLevel?: boolean;
  lang?: Quiz['language'];
}
