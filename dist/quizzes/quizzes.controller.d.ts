import { QuizzesService } from './quizzes.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { GetQuizzesDto } from './dto/get-quizzes.dto';
export declare class QuizzesController {
    private readonly quizzesService;
    constructor(quizzesService: QuizzesService);
    create(createQuizDto: CreateQuizDto): Promise<import("./schemas/quiz.schema").Quiz>;
    findAll(query: GetQuizzesDto): Promise<import("./schemas/quiz.schema").Quiz[]>;
    findOne(id: string): Promise<import("./schemas/quiz.schema").Quiz>;
    update(id: string, updateQuizDto: UpdateQuizDto): Promise<import("./schemas/quiz.schema").Quiz>;
    remove(id: string): Promise<import("./schemas/quiz.schema").Quiz>;
}
