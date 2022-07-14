import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(id: string): Promise<any>;
    googleLogin(request: any): "No user from google" | {
        token: string;
        user: any;
    };
}
