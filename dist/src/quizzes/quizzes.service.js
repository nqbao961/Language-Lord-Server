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
exports.QuizzesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let QuizzesService = class QuizzesService {
    constructor(quizModel) {
        this.quizModel = quizModel;
    }
    async create(createQuizDto) {
        const newQuiz = new this.quizModel(createQuizDto);
        await newQuiz.save();
        return newQuiz;
    }
    async findAll(query) {
        const filter = Object.assign(Object.assign({}, (query.notInLevel && {
            $or: [
                { levelNumber: { $exists: false } },
                { levelNumber: { $type: 'null' } },
            ],
        })), { language: query.lang });
        return this.quizModel.find(filter).exec();
    }
    async findOne(id) {
        return this.quizModel.findById(id);
    }
    async update(id, updateQuizDto) {
        return this.quizModel
            .findByIdAndUpdate(id, updateQuizDto, { new: true })
            .exec();
    }
    async remove(id) {
        return this.quizModel.findByIdAndRemove(id).exec();
    }
};
QuizzesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Quiz')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], QuizzesService);
exports.QuizzesService = QuizzesService;
//# sourceMappingURL=quizzes.service.js.map