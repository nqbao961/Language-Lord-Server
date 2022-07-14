import mongoose, { Document } from 'mongoose';
export declare type UserDocument = User & Document;
export declare class User {
    _id: string;
    email: string;
    name: string;
    role: string;
    avatar: string;
    preferedLang: string;
    level: {
        vi: number;
        en: number;
    };
    score: {
        vi: number;
        en: number;
    };
    hint: {
        vi: number;
        en: number;
    };
    completedQuizzes: {
        vi: string[];
        en: string[];
    };
    createdAt: Date;
}
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, any>, {}, {}, any, {}, "type", User>;
