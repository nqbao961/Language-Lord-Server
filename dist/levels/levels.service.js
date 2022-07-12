"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let LevelsService = class LevelsService {
    constructor(levelModel, quizModel) {
        this.levelModel = levelModel;
        this.quizModel = quizModel;
    }
    async create(query, createLevelDto) {
        const { lang } = query;
        const level = createLevelDto;
        const _id = `${lang}-${level.levelNumber}`;
        const newLevel = new this.levelModel(Object.assign(Object.assign({}, level), { _id, language: lang }));
        const findLevel = await this.levelModel.findById(_id);
        if (findLevel) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error: `Duplicate level with number: ${level.levelNumber}`,
            }, common_1.HttpStatus.BAD_REQUEST);
        }
        for (const quiz of level.quizList) {
            await this.quizModel
                .findByIdAndUpdate(quiz, {
                levelId: newLevel._id,
                levelNumber: level.levelNumber,
            })
                .exec();
        }
        await newLevel.save();
        return newLevel;
    }
    async findAll(query) {
        return await this.levelModel
            .find({ language: query.lang })
            .populate('quizList');
    }
    async getTotal() {
        const en = await this.levelModel.count({ language: 'en' });
        const vi = await this.levelModel.count({ language: 'vi' });
        return {
            en,
            vi,
        };
    }
    async findOne(id) {
        const level = await this.levelModel.findById(id);
        const levelWithQuiz = await level.populate('quizList');
        return levelWithQuiz;
    }
    async update(id, updateLevelDto) {
        return this.levelModel
            .findByIdAndUpdate(id, updateLevelDto, { new: true })
            .exec();
    }
    async remove(id) {
        return this.levelModel.findByIdAndRemove(id).exec();
    }
};
LevelsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Level')),
    __param(1, (0, mongoose_1.InjectModel)('Quiz')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], LevelsService);
exports.LevelsService = LevelsService;
//# sourceMappingURL=levels.service.js.map