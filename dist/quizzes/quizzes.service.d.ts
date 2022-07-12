import { Model } from 'mongoose';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { GetQuizzesDto } from './dto/get-quizzes.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { Quiz, QuizDocument } from './schemas/quiz.schema';
export declare class QuizzesService {
    private quizModel;
    constructor(quizModel: Model<QuizDocument>);
    create(createQuizDto: CreateQuizDto): Promise<Quiz>;
    findAll(query: GetQuizzesDto): Promise<Quiz[]>;
    findOne(id: string): Promise<Quiz>;
    update(id: string, updateQuizDto: UpdateQuizDto): Promise<Quiz>;
    remove(id: string): Promise<Quiz>;
}
