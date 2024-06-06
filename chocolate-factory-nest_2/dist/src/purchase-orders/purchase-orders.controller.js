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
exports.PurchaseOrdersController = void 0;
const common_1 = require("@nestjs/common");
const purchase_orders_service_1 = require("./purchase-orders.service");
const create_purchase_order_dto_1 = require("./dto/create-purchase-order.dto");
const update_purchase_order_dto_1 = require("./dto/update-purchase-order.dto");
const swagger_1 = require("@nestjs/swagger");
let PurchaseOrdersController = class PurchaseOrdersController {
    constructor(purchaseOrdersService) {
        this.purchaseOrdersService = purchaseOrdersService;
    }
    create(createPurchaseOrderDto) {
        return this.purchaseOrdersService.create(createPurchaseOrderDto);
    }
    findAll() {
        return this.purchaseOrdersService.findAll();
    }
    findOne(id) {
        return this.purchaseOrdersService.findOne(id);
    }
    update(id, updatePurchaseOrderDto) {
        return this.purchaseOrdersService.update(id, updatePurchaseOrderDto);
    }
    remove(id) {
        return this.purchaseOrdersService.remove(id);
    }
};
exports.PurchaseOrdersController = PurchaseOrdersController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create purchase order' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The purchase order has been successfully created.',
    }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_purchase_order_dto_1.CreatePurchaseOrderDto]),
    __metadata("design:returntype", void 0)
], PurchaseOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all purchase orders' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all purchase orders.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PurchaseOrdersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get purchase order by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return the purchase order.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Purchase order not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PurchaseOrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update purchase order' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The purchase order has been successfully updated.',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Purchase order not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_purchase_order_dto_1.UpdatePurchaseOrderDto]),
    __metadata("design:returntype", void 0)
], PurchaseOrdersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete purchase order' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The purchase order has been successfully deleted.',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Purchase order not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PurchaseOrdersController.prototype, "remove", null);
exports.PurchaseOrdersController = PurchaseOrdersController = __decorate([
    (0, swagger_1.ApiTags)('purchase-orders'),
    (0, common_1.Controller)('purchase-orders'),
    __metadata("design:paramtypes", [purchase_orders_service_1.PurchaseOrdersService])
], PurchaseOrdersController);
//# sourceMappingURL=purchase-orders.controller.js.map