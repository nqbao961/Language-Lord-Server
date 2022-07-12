/// <reference types="passport" />
import { AppService } from './app.service';
import { Request } from 'express';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    googleAuth(request: Request): Promise<void>;
    googleAuthRedirect(request: Request): "No user from google" | {
        message: string;
        user: Express.User;
    };
}
