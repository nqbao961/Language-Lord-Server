import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QuizDocument = Quiz & Document;

@Schema()
export class Quiz {
  @Prop({
    required: true,
    enum: ['shuffleLetters', 'shuffleIdiom', 'multipleChoice'],
  })
  type: string;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  answer: string;

  @Prop()
  explaination: string;

  @Prop()
  info: string;

  @Prop({ type: [String], default: undefined })
  choices: string[];

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ ref: 'Level' })
  levelId: string;

  @Prop()
  levelNumber: number;

  @Prop({ required: true, enum: ['en', 'vi'] })
  language: string;
}

export const QuizSchema = SchemaFactory.createForClass(Quiz);
