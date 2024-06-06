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
exports.InventoryTransactionsController = void 0;
const common_1 = require("@nestjs/common");
const inventory_transactions_service_1 = require("./inventory-transactions.service");
const create_inventory_transaction_dto_1 = require("./dto/create-inventory-transaction.dto");
const update_inventory_transaction_dto_1 = require("./dto/update-inventory-transaction.dto");
const swagger_1 = require("@nestjs/swagger");
let InventoryTransactionsController = class InventoryTransactionsController {
    constructor(inventoryTransactionsService) {
        this.inventoryTransactionsService = inventoryTransactionsService;
    }
    create(createInventoryTransactionDto) {
        return this.inventoryTransactionsService.create(createInventoryTransactionDto);
    }
    findAll() {
        return this.inventoryTransactionsService.findAll();
    }
    findOne(id) {
        return this.inventoryTransactionsService.findOne(id);
    }
    update(id, updateInventoryTransactionDto) {
        return this.inventoryTransactionsService.update(id, updateInventoryTransactionDto);
    }
    remove(id) {
        return this.inventoryTransactionsService.remove(id);
    }
};
exports.InventoryTransactionsController = InventoryTransactionsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create inventory transaction' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The inventory transaction has been successfully created.',
    }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_inventory_transaction_dto_1.CreateInventoryTransactionDto]),
    __metadata("design:returntype", void 0)
], InventoryTransactionsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all inventory transactions' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Return all inventory transactions.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InventoryTransactionsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get inventory transaction by id' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Return the inventory transaction.',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Inventory transaction not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InventoryTransactionsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update inventory transaction' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The inventory transaction has been successfully updated.',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Inventory transaction not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_inventory_transaction_dto_1.UpdateInventoryTransactionDto]),
    __metadata("design:returntype", void 0)
], InventoryTransactionsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete inventory transaction' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The inventory transaction has been successfully deleted.',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Inventory transaction not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InventoryTransactionsController.prototype, "remove", null);
exports.InventoryTransactionsController = InventoryTransactionsController = __decorate([
    (0, swagger_1.ApiTags)('inventory-transactions'),
    (0, common_1.Controller)('inventory-transactions'),
    __metadata("design:paramtypes", [inventory_transactions_service_1.InventoryTransactionsService])
], InventoryTransactionsController);
//# sourceMappingURL=inventory-transactions.controller.js.map