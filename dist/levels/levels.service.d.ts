import { Model } from 'mongoose';
import { QuizDocument } from '../quizzes/schemas/quiz.schema';
import { CreateLevelDto } from './dto/create-level.dto';
import { GetLevelsDto } from './dto/get-levels.dto';
import { UpdateLevelDto } from './dto/update-level.dto';
import { Level, LevelDocument } from './schemas/level.schema';
export declare class LevelsService {
  private levelModel;
  private quizModel;
  constructor(levelModel: Model<LevelDocument>, quizModel: Model<QuizDocument>);
  create(query: GetLevelsDto, createLevelDto: CreateLevelDto): Promise<Level>;
  findAll(query: GetLevelsDto): Promise<Level[]>;
  getTotal(): Promise<{
    en: number;
    vi: number;
  }>;
  findOne(id: string): Promise<Level>;
  update(id: string, updateLevelDto: UpdateLevelDto): Promise<Level>;
  remove(id: string): Promise<Level>;
}
