/// <reference types="passport" />
import { Request } from 'express';
import { AuthService } from './auth/auth.service';
export declare class AppController {
    private authService;
    constructor(authService: AuthService);
    googleAuth(request: Request): Promise<void>;
    googleAuthRedirect(request: Request): "No user from google" | {
        token: string;
        user: any;
    };
    getProfile(request: Request): Express.User;
}
