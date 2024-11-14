import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import mongoose from 'mongoose';
import { Quiz } from '../../quizzes/schemas/quiz.schema';

export type LevelDocument = Level & Document;

@Schema()
export class Level {
  @Prop()
  _id: string;

  @Prop({
    required: true,
    enum: ['en', 'vi'],
  })
  language: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' }] })
  quizList: Quiz[];

  @Prop()
  levelNumber: number;
}

export const LevelSchema = SchemaFactory.createForClass(Level);
