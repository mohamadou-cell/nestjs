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
exports.ClimatService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const climat_entity_1 = require("./entities/climat.entity");
let ClimatService = class ClimatService {
    constructor(climatModel) {
        this.climatModel = climatModel;
    }
    async create(createClimatDto) {
        const res = await this.climatModel.create(createClimatDto);
        return res;
    }
    async findAll() {
        const climats = await this.climatModel.find();
        return climats;
    }
    async findOne(id) {
        const climat = await this.climatModel.findById(id);
        if (!climat) {
            throw new common_1.NotFoundException('Rien a été trouvé');
        }
        return climat;
    }
    async update(id, updateClimatDto) {
        return await this.climatModel.findByIdAndUpdate(id, updateClimatDto, {
            new: true,
            runValidators: true,
        });
    }
    async remove(id) {
        return await this.climatModel.findByIdAndDelete(id);
    }
};
ClimatService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(climat_entity_1.Climat.name)),
    __metadata("design:paramtypes", [mongoose.Model])
], ClimatService);
exports.ClimatService = ClimatService;
//# sourceMappingURL=climat.service.js.map