import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  _id: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  name: string;

  @Prop({ default: 'user' })
  role: string;

  @Prop()
  avatar: string;

  @Prop({ enum: ['en', 'vi'] })
  preferedLang: string;

  @Prop({
    type: {
      vi: Number,
      en: Number,
    },
    default: { vi: 1, en: 1 },
  })
  level: {
    vi: number;
    en: number;
  };

  @Prop({
    type: {
      vi: Number,
      en: Number,
    },
    default: { vi: 0, en: 0 },
  })
  score: {
    vi: number;
    en: number;
  };

  @Prop({
    type: {
      vi: Number,
      en: Number,
    },
    default: { vi: 3, en: 3 },
  })
  hint: {
    vi: number;
    en: number;
  };

  @Prop({
    type: {
      vi: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' }],
      en: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' }],
    },
    default: { vi: [], en: [] },
  })
  completedQuizzes: {
    vi: string[];
    en: string[];
  };

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
