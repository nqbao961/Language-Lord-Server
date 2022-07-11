import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { QuizDocument } from 'src/quizzes/schemas/quiz.schema';
import { CreateLevelDto } from './dto/create-level.dto';
import { GetLevelsDto } from './dto/get-levels.dto';
import { UpdateLevelDto } from './dto/update-level.dto';
import { Level, LevelDocument } from './schemas/level.schema';

@Injectable()
export class LevelsService {
  constructor(
    @InjectModel('Level') private levelModel: Model<LevelDocument>,
    @InjectModel('Quiz') private quizModel: Model<QuizDocument>,
  ) {}

  async create(
    query: GetLevelsDto,
    createLevelDto: CreateLevelDto,
  ): Promise<Level> {
    const { lang } = query;
    const level = createLevelDto;
    const _id = `${lang}-${level.levelNumber}`;
    const newLevel = new this.levelModel({ ...level, _id, language: lang });
    const findLevel = await this.levelModel.findById(_id);

    if (findLevel) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Duplicate level with number: ${level.levelNumber}`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    for (const quiz of level.quizList) {
      await this.quizModel
        .findByIdAndUpdate(quiz, {
          levelId: newLevel._id,
          levelNumber: level.levelNumber,
        })
        .exec();
    }
    await newLevel.save();

    return newLevel;
  }

  async findAll(query: GetLevelsDto): Promise<Level[]> {
    return await this.levelModel
      .find({ language: query.lang })
      .populate('quizList');
  }

  async getTotal() {
    const en = await this.levelModel.count({ language: 'en' });
    const vi = await this.levelModel.count({ language: 'vi' });

    return {
      en,
      vi,
    };
  }

  async findOne(id: string): Promise<Level> {
    const level = await this.levelModel.findById(id);
    const levelWithQuiz = await level.populate('quizList');

    return levelWithQuiz;
  }

  async update(id: string, updateLevelDto: UpdateLevelDto): Promise<Level> {
    return this.levelModel
      .findByIdAndUpdate(id, updateLevelDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Level> {
    return this.levelModel.findByIdAndRemove(id).exec();
  }
}
