import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../../users/users.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private readonly usersService: UsersService) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL:
        process.env.NODE_ENV === 'production'
          ? 'https://language-lord-web.vercel.app/google/redirect'
          : 'http://localhost:3000/google/redirect',
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const { id, displayName, emails, photos } = profile;
    const user = {
      _id: id,
      email: emails[0].value,
      name: displayName,
      avatar: photos[0].value,
    };
    const findUser = await this.usersService.findOne(user._id);

    if (!findUser) {
      const newUser = await this.usersService.create(user);
      done(null, newUser);
    } else {
      done(null, findUser);
    }
  }
}
