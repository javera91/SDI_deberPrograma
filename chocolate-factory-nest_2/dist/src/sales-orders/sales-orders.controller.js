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
exports.SalesOrdersController = void 0;
const common_1 = require("@nestjs/common");
const sales_orders_service_1 = require("./sales-orders.service");
const create_sales_order_dto_1 = require("./dto/create-sales-order.dto");
const update_sales_order_dto_1 = require("./dto/update-sales-order.dto");
const swagger_1 = require("@nestjs/swagger");
let SalesOrdersController = class SalesOrdersController {
    constructor(salesOrdersService) {
        this.salesOrdersService = salesOrdersService;
    }
    create(createSalesOrderDto) {
        return this.salesOrdersService.create(createSalesOrderDto);
    }
    findAll() {
        return this.salesOrdersService.findAll();
    }
    findOne(id) {
        return this.salesOrdersService.findOne(id);
    }
    update(id, updateSalesOrderDto) {
        return this.salesOrdersService.update(id, updateSalesOrderDto);
    }
    remove(id) {
        return this.salesOrdersService.remove(id);
    }
};
exports.SalesOrdersController = SalesOrdersController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create sales order' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The sales order has been successfully created.',
    }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sales_order_dto_1.CreateSalesOrderDto]),
    __metadata("design:returntype", void 0)
], SalesOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all sales orders' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all sales orders.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SalesOrdersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get sales order by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return the sales order.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Sales order not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SalesOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update sales order' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The sales order has been successfully updated.',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Sales order not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_sales_order_dto_1.UpdateSalesOrderDto]),
    __metadata("design:returntype", void 0)
], SalesOrdersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete sales order' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The sales order has been successfully deleted.',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Sales order not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SalesOrdersController.prototype, "remove", null);
exports.SalesOrdersController = SalesOrdersController = __decorate([
    (0, swagger_1.ApiTags)('sales-orders'),
    (0, common_1.Controller)('sales-orders'),
    __metadata("design:paramtypes", [sales_orders_service_1.SalesOrdersService])
], SalesOrdersController);
//# sourceMappingURL=sales-orders.controller.js.map