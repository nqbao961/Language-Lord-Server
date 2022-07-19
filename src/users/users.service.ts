import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDocument } from './schemas/user.schemas';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = new this.userModel(createUserDto);
    await newUser.save();

    return newUser;
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(id: string) {
    const user = await this.userModel.findById(id).exec();

    if (!user) {
      return null;
    }

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const updatedUser = await this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .exec();

    return updatedUser;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async getRank() {
    const rankEn = await this.userModel
      .find()
      .sort({ 'score.en': 'desc', 'hint.en': 'desc' })
      .exec();
    const rankVi = await this.userModel
      .find()
      .sort({ 'score.vi': 'desc', 'hint.vi': 'desc' })
      .exec();

    return {
      en: rankEn,
      vi: rankVi,
    };
  }
}
