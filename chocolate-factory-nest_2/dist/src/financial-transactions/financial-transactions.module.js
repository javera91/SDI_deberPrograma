"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancialTransactionsModule = void 0;
const common_1 = require("@nestjs/common");
const financial_transactions_service_1 = require("./financial-transactions.service");
const financial_transactions_controller_1 = require("./financial-transactions.controller");
const prisma_module_1 = require("../prisma/prisma.module");
let FinancialTransactionsModule = class FinancialTransactionsModule {
};
exports.FinancialTransactionsModule = FinancialTransactionsModule;
exports.FinancialTransactionsModule = FinancialTransactionsModule = __decorate([
    (0, common_1.Module)({
        controllers: [financial_transactions_controller_1.FinancialTransactionsController],
        providers: [financial_transactions_service_1.FinancialTransactionsService],
        imports: [prisma_module_1.PrismaModule],
    })
], FinancialTransactionsModule);
//# sourceMappingURL=financial-transactions.module.js.map