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
exports.UserSchema = exports.User = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let User = class User {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], User.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'user' }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "avatar", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: ['en', 'vi'] }),
    __metadata("design:type", String)
], User.prototype, "preferedLang", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            vi: Number,
            en: Number,
        },
        default: { vi: 1, en: 1 },
    }),
    __metadata("design:type", Object)
], User.prototype, "level", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            vi: Number,
            en: Number,
        },
        default: { vi: 0, en: 0 },
    }),
    __metadata("design:type", Object)
], User.prototype, "score", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            vi: Number,
            en: Number,
        },
        default: { vi: 3, en: 3 },
    }),
    __metadata("design:type", Object)
], User.prototype, "hint", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            vi: [{ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Quiz' }],
            en: [{ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Quiz' }],
        },
        default: { vi: [], en: [] },
    }),
    __metadata("design:type", Object)
], User.prototype, "completedQuizzes", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now }),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
User = __decorate([
    (0, mongoose_1.Schema)()
], User);
exports.User = User;
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);
//# sourceMappingURL=user.schemas.js.map