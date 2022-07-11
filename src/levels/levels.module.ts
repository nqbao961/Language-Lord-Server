import { Module } from '@nestjs/common';
import { LevelsService } from './levels.service';
import { LevelsController } from './levels.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LevelSchema } from './schemas/level.schema';
import { QuizSchema } from 'src/quizzes/schemas/quiz.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Level', schema: LevelSchema }]),
    MongooseModule.forFeature([{ name: 'Quiz', schema: QuizSchema }]),
  ],
  controllers: [LevelsController],
  providers: [LevelsService],
})
export class LevelsModule {}
