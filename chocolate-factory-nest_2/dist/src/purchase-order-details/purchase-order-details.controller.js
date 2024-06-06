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
exports.PurchaseOrderDetailsController = void 0;
const common_1 = require("@nestjs/common");
const purchase_order_details_service_1 = require("./purchase-order-details.service");
const create_purchase_order_detail_dto_1 = require("./dto/create-purchase-order-detail.dto");
const update_purchase_order_detail_dto_1 = require("./dto/update-purchase-order-detail.dto");
const swagger_1 = require("@nestjs/swagger");
let PurchaseOrderDetailsController = class PurchaseOrderDetailsController {
    constructor(purchaseOrderDetailsService) {
        this.purchaseOrderDetailsService = purchaseOrderDetailsService;
    }
    create(createPurchaseOrderDetailDto) {
        return this.purchaseOrderDetailsService.create(createPurchaseOrderDetailDto);
    }
    findAll() {
        return this.purchaseOrderDetailsService.findAll();
    }
    findOne(id) {
        return this.purchaseOrderDetailsService.findOne(id);
    }
    update(id, updatePurchaseOrderDetailDto) {
        return this.purchaseOrderDetailsService.update(id, updatePurchaseOrderDetailDto);
    }
    remove(id) {
        return this.purchaseOrderDetailsService.remove(id);
    }
};
exports.PurchaseOrderDetailsController = PurchaseOrderDetailsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create purchase order detail' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The purchase order detail has been successfully created.',
    }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_purchase_order_detail_dto_1.CreatePurchaseOrderDetailDto]),
    __metadata("design:returntype", void 0)
], PurchaseOrderDetailsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all purchase order details' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Return all purchase order details.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PurchaseOrderDetailsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get purchase order detail by id' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Return the purchase order detail.',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Purchase order detail not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PurchaseOrderDetailsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update purchase order detail' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The purchase order detail has been successfully updated.',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Purchase order detail not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_purchase_order_detail_dto_1.UpdatePurchaseOrderDetailDto]),
    __metadata("design:returntype", void 0)
], PurchaseOrderDetailsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete purchase order detail' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The purchase order detail has been successfully deleted.',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Purchase order detail not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PurchaseOrderDetailsController.prototype, "remove", null);
exports.PurchaseOrderDetailsController = PurchaseOrderDetailsController = __decorate([
    (0, swagger_1.ApiTags)('purchase-order-details'),
    (0, common_1.Controller)('purchase-order-details'),
    __metadata("design:paramtypes", [purchase_order_details_service_1.PurchaseOrderDetailsService])
], PurchaseOrderDetailsController);
//# sourceMappingURL=purchase-order-details.controller.js.map