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
exports.ProductionOrdersController = void 0;
const common_1 = require("@nestjs/common");
const production_orders_service_1 = require("./production-orders.service");
const create_production_order_dto_1 = require("./dto/create-production-order.dto");
const update_production_order_dto_1 = require("./dto/update-production-order.dto");
const swagger_1 = require("@nestjs/swagger");
let ProductionOrdersController = class ProductionOrdersController {
    constructor(productionOrdersService) {
        this.productionOrdersService = productionOrdersService;
    }
    create(createProductionOrderDto) {
        return this.productionOrdersService.create(createProductionOrderDto);
    }
    findAll() {
        return this.productionOrdersService.findAll();
    }
    findOne(id) {
        return this.productionOrdersService.findOne(id);
    }
    update(id, updateProductionOrderDto) {
        return this.productionOrdersService.update(id, updateProductionOrderDto);
    }
    remove(id) {
        return this.productionOrdersService.remove(id);
    }
};
exports.ProductionOrdersController = ProductionOrdersController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create production order' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The production order has been successfully created.',
    }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_production_order_dto_1.CreateProductionOrderDto]),
    __metadata("design:returntype", void 0)
], ProductionOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all production orders' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all production orders.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductionOrdersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get production order by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return the production order.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Production order not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductionOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update production order' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The production order has been successfully updated.',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Production order not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_production_order_dto_1.UpdateProductionOrderDto]),
    __metadata("design:returntype", void 0)
], ProductionOrdersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete production order' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The production order has been successfully deleted.',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Production order not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductionOrdersController.prototype, "remove", null);
exports.ProductionOrdersController = ProductionOrdersController = __decorate([
    (0, swagger_1.ApiTags)('production-orders'),
    (0, common_1.Controller)('production-orders'),
    __metadata("design:paramtypes", [production_orders_service_1.ProductionOrdersService])
], ProductionOrdersController);
//# sourceMappingURL=production-orders.controller.js.map