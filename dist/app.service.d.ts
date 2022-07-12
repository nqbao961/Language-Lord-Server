/// <reference types="passport" />
import { Request } from 'express';
export declare class AppService {
    googleLogin(request: Request): "No user from google" | {
        message: string;
        user: Express.User;
    };
}
