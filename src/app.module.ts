import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CONNECTION_URL } from './config';
import { QuizzesModule } from './quizzes/quizzes.module';
import { LevelsModule } from './levels/levels.module';

@Module({
  imports: [QuizzesModule, MongooseModule.forRoot(CONNECTION_URL), LevelsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
