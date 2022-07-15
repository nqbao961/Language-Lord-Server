import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schemas';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): string;
    getRank(): Promise<{
        en: (User & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        })[];
        vi: (User & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    findOne(id: string): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(request: {
        user: User;
    }, updateUserDto: UpdateUserDto): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string): string;
}
