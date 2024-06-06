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
exports.RawMaterialsController = void 0;
const common_1 = require("@nestjs/common");
const raw_materials_service_1 = require("./raw-materials.service");
const create_raw_material_dto_1 = require("./dto/create-raw-material.dto");
const update_raw_material_dto_1 = require("./dto/update-raw-material.dto");
const swagger_1 = require("@nestjs/swagger");
let RawMaterialsController = class RawMaterialsController {
    constructor(rawMaterialsService) {
        this.rawMaterialsService = rawMaterialsService;
    }
    create(createRawMaterialDto) {
        return this.rawMaterialsService.create(createRawMaterialDto);
    }
    findAll() {
        return this.rawMaterialsService.findAll();
    }
    findOne(id) {
        return this.rawMaterialsService.findOne(id);
    }
    update(id, updateRawMaterialDto) {
        return this.rawMaterialsService.update(id, updateRawMaterialDto);
    }
    remove(id) {
        return this.rawMaterialsService.remove(id);
    }
};
exports.RawMaterialsController = RawMaterialsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create raw material' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The raw material has been successfully created.',
    }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_raw_material_dto_1.CreateRawMaterialDto]),
    __metadata("design:returntype", void 0)
], RawMaterialsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all raw materials' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all raw materials.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RawMaterialsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get raw material by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return the raw material.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Raw material not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RawMaterialsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update raw material' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The raw material has been successfully updated.',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Raw material not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_raw_material_dto_1.UpdateRawMaterialDto]),
    __metadata("design:returntype", void 0)
], RawMaterialsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete raw material' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The raw material has been successfully deleted.',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Raw material not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RawMaterialsController.prototype, "remove", null);
exports.RawMaterialsController = RawMaterialsController = __decorate([
    (0, swagger_1.ApiTags)('raw-materials'),
    (0, common_1.Controller)('raw-materials'),
    __metadata("design:paramtypes", [raw_materials_service_1.RawMaterialsService])
], RawMaterialsController);
//# sourceMappingURL=raw-materials.controller.js.map