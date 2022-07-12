import { Document } from 'mongoose';
import mongoose from 'mongoose';
import { Quiz } from 'src/quizzes/schemas/quiz.schema';
export declare type LevelDocument = Level & Document;
export declare class Level {
    _id: string;
    language: string;
    quizList: Quiz[];
    levelNumber: number;
}
export declare const LevelSchema: mongoose.Schema<Level, mongoose.Model<Level, any, any, any, any>, {}, {}, any, {}, "type", Level>;
