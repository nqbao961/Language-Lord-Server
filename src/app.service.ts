import { Injectable, Req } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AppService {
  googleLogin(request: Request) {
    if (!request.user) {
      return 'No user from google';
    }

    return {
      message: 'User information from google',
      user: request.user,
    };
  }
}
