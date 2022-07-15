import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDocument } from './schemas/user.schemas';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    create(createUserDto: CreateUserDto): Promise<import("./schemas/user.schemas").User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): string;
    findOne(id: string): Promise<import("./schemas/user.schemas").User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("./schemas/user.schemas").User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: number): string;
    getRank(): Promise<{
        en: (import("./schemas/user.schemas").User & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        })[];
        vi: (import("./schemas/user.schemas").User & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
}
