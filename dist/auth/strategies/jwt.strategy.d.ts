import { Strategy } from 'passport-jwt';
import { jwtPayload } from '../../typings';
import { UsersService } from '../../users/users.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
  private usersService;
  constructor(usersService: UsersService);
  validate(payload: jwtPayload): Promise<
    import('../../users/schemas/user.schemas').User &
      import('mongoose').Document<any, any, any> & {
        _id: import('mongoose').Types.ObjectId;
      }
  >;
}
export {};
