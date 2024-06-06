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
exports.SalesOrderDetailsController = void 0;
const common_1 = require("@nestjs/common");
const sales_order_detail_service_1 = require("./sales-order-detail.service");
const create_sales_order_detail_dto_1 = require("./dto/create-sales-order-detail.dto");
const update_sales_order_detail_dto_1 = require("./dto/update-sales-order-detail.dto");
const swagger_1 = require("@nestjs/swagger");
let SalesOrderDetailsController = class SalesOrderDetailsController {
    constructor(salesOrderDetailsService) {
        this.salesOrderDetailsService = salesOrderDetailsService;
    }
    create(createSalesOrderDetailDto) {
        return this.salesOrderDetailsService.create(createSalesOrderDetailDto);
    }
    findAll() {
        return this.salesOrderDetailsService.findAll();
    }
    findOne(id) {
        return this.salesOrderDetailsService.findOne(id);
    }
    update(id, updateSalesOrderDetailDto) {
        return this.salesOrderDetailsService.update(id, updateSalesOrderDetailDto);
    }
    remove(id) {
        return this.salesOrderDetailsService.remove(id);
    }
};
exports.SalesOrderDetailsController = SalesOrderDetailsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create sales order detail' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The sales order detail has been successfully created.',
    }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sales_order_detail_dto_1.CreateSalesOrderDetailDto]),
    __metadata("design:returntype", void 0)
], SalesOrderDetailsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all sales order details' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all sales order details.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SalesOrderDetailsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get sales order detail by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return the sales order detail.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Sales order detail not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SalesOrderDetailsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update sales order detail' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The sales order detail has been successfully updated.',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Sales order detail not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_sales_order_detail_dto_1.UpdateSalesOrderDetailDto]),
    __metadata("design:returntype", void 0)
], SalesOrderDetailsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete sales order detail' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The sales order detail has been successfully deleted.',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Sales order detail not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SalesOrderDetailsController.prototype, "remove", null);
exports.SalesOrderDetailsController = SalesOrderDetailsController = __decorate([
    (0, swagger_1.ApiTags)('sales-order-details'),
    (0, common_1.Controller)('sales-order-details'),
    __metadata("design:paramtypes", [sales_order_detail_service_1.SalesOrderDetailsService])
], SalesOrderDetailsController);
//# sourceMappingURL=sales-order-detail.controller.js.map