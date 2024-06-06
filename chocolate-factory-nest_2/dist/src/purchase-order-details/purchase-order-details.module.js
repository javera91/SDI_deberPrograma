"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseOrderDetailsModule = void 0;
const common_1 = require("@nestjs/common");
const purchase_order_details_service_1 = require("./purchase-order-details.service");
const purchase_order_details_controller_1 = require("./purchase-order-details.controller");
const prisma_service_1 = require("../prisma/prisma.service");
let PurchaseOrderDetailsModule = class PurchaseOrderDetailsModule {
};
exports.PurchaseOrderDetailsModule = PurchaseOrderDetailsModule;
exports.PurchaseOrderDetailsModule = PurchaseOrderDetailsModule = __decorate([
    (0, common_1.Module)({
        controllers: [purchase_order_details_controller_1.PurchaseOrderDetailsController],
        providers: [purchase_order_details_service_1.PurchaseOrderDetailsService, prisma_service_1.PrismaService],
    })
], PurchaseOrderDetailsModule);
//# sourceMappingURL=purchase-order-details.module.js.map