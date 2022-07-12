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
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizSchema = exports.Quiz = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Quiz = class Quiz {
};
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        enum: ['shuffleLetters', 'shuffleIdiom', 'multipleChoice'],
    }),
    __metadata("design:type", String)
], Quiz.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Quiz.prototype, "content", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Quiz.prototype, "answer", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Quiz.prototype, "explaination", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Quiz.prototype, "info", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: undefined }),
    __metadata("design:type", Array)
], Quiz.prototype, "choices", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now }),
    __metadata("design:type", Date)
], Quiz.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ ref: 'Level' }),
    __metadata("design:type", String)
], Quiz.prototype, "levelId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Quiz.prototype, "levelNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: ['en', 'vi'] }),
    __metadata("design:type", String)
], Quiz.prototype, "language", void 0);
Quiz = __decorate([
    (0, mongoose_1.Schema)()
], Quiz);
exports.Quiz = Quiz;
exports.QuizSchema = mongoose_1.SchemaFactory.createForClass(Quiz);
//# sourceMappingURL=quiz.schema.js.map