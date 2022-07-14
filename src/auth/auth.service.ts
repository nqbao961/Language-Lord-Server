import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { jwtPayload } from 'src/typings';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(id: string): Promise<any> {
    const user = await this.usersService.findOne(id);
    if (user) {
      return user;
    }
    return null;
  }

  googleLogin(request) {
    if (!request.user) {
      return 'No user from google';
    }

    const payload: jwtPayload = {
      userInfo: {
        email: request.user.email,
        name: request.user.name,
      },
      sub: request.user._id,
    };

    return {
      token: this.jwtService.sign(payload),
      user: request.user,
    };
  }
}
