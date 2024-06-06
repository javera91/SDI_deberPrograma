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
exports.FinancialTransactionsController = void 0;
const common_1 = require("@nestjs/common");
const financial_transactions_service_1 = require("./financial-transactions.service");
const create_financial_transaction_dto_1 = require("./dto/create-financial-transaction.dto");
const update_financial_transaction_dto_1 = require("./dto/update-financial-transaction.dto");
const swagger_1 = require("@nestjs/swagger");
let FinancialTransactionsController = class FinancialTransactionsController {
    constructor(financialTransactionsService) {
        this.financialTransactionsService = financialTransactionsService;
    }
    create(createFinancialTransactionDto) {
        return this.financialTransactionsService.create(createFinancialTransactionDto);
    }
    findAll() {
        return this.financialTransactionsService.findAll();
    }
    findOne(id) {
        return this.financialTransactionsService.findOne(id);
    }
    update(id, updateFinancialTransactionDto) {
        return this.financialTransactionsService.update(id, updateFinancialTransactionDto);
    }
    remove(id) {
        return this.financialTransactionsService.remove(id);
    }
};
exports.FinancialTransactionsController = FinancialTransactionsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create financial transaction' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The financial transaction has been successfully created.',
    }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_financial_transaction_dto_1.CreateFinancialTransactionDto]),
    __metadata("design:returntype", void 0)
], FinancialTransactionsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all financial transactions' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Return all financial transactions.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FinancialTransactionsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get financial transaction by id' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Return the financial transaction.',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Financial transaction not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FinancialTransactionsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update financial transaction' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The financial transaction has been successfully updated.',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Financial transaction not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_financial_transaction_dto_1.UpdateFinancialTransactionDto]),
    __metadata("design:returntype", void 0)
], FinancialTransactionsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete financial transaction' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The financial transaction has been successfully deleted.',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Financial transaction not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FinancialTransactionsController.prototype, "remove", null);
exports.FinancialTransactionsController = FinancialTransactionsController = __decorate([
    (0, swagger_1.ApiTags)('financial-transactions'),
    (0, common_1.Controller)('financial-transactions'),
    __metadata("design:paramtypes", [financial_transactions_service_1.FinancialTransactionsService])
], FinancialTransactionsController);
//# sourceMappingURL=financial-transactions.controller.js.map