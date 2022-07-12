import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizzesModule } from './quizzes/quizzes.module';
import { LevelsModule } from './levels/levels.module';
import { ConfigModule } from '@nestjs/config';
import { GoogleStrategy } from './google.strategy';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.CONNECTION_URL),
    QuizzesModule,
    LevelsModule,
  ],
  controllers: [AppController],
  providers: [AppService, GoogleStrategy],
})
export class AppModule {}
