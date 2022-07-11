import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { GetQuizzesDto } from './dto/get-quizzes.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { Quiz, QuizDocument } from './schemas/quiz.schema';

@Injectable()
export class QuizzesService {
  constructor(@InjectModel('Quiz') private quizModel: Model<QuizDocument>) {}

  async create(createQuizDto: CreateQuizDto): Promise<Quiz> {
    const newQuiz = new this.quizModel(createQuizDto);
    await newQuiz.save();

    return newQuiz;
  }

  async findAll(query: GetQuizzesDto): Promise<Quiz[]> {
    const filter = {
      ...(query.notInLevel && {
        $or: [
          { levelNumber: { $exists: false } },
          { levelNumber: { $type: 'null' } },
        ],
      }),
      language: query.lang,
    };

    return this.quizModel.find(filter).exec();
  }

  async findOne(id: string): Promise<Quiz> {
    return this.quizModel.findById(id);
  }

  async update(id: string, updateQuizDto: UpdateQuizDto): Promise<Quiz> {
    return this.quizModel
      .findByIdAndUpdate(id, updateQuizDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Quiz> {
    return this.quizModel.findByIdAndRemove(id).exec();
  }
}
