"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const employees_module_1 = require("./employees/employees.module");
const raw_materials_module_1 = require("./raw-materials/raw-materials.module");
const products_module_1 = require("./products/products.module");
const prisma_module_1 = require("./prisma/prisma.module");
const customers_module_1 = require("./customers/customers.module");
const financial_transactions_module_1 = require("./financial-transactions/financial-transactions.module");
const inventory_transactions_module_1 = require("./inventory-transactions/inventory-transactions.module");
const production_orders_module_1 = require("./production-orders/production-orders.module");
const purchase_orders_module_1 = require("./purchase-orders/purchase-orders.module");
const purchase_order_details_module_1 = require("./purchase-order-details/purchase-order-details.module");
const sales_orders_module_1 = require("./sales-orders/sales-orders.module");
const suppliers_module_1 = require("./suppliers/suppliers.module");
const sales_order_detail_module_1 = require("./sales-order-detail/sales-order-detail.module");
const configuration_1 = require("./config/configuration");
const validationSchema_1 = require("./config/validationSchema");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [configuration_1.default],
                validationSchema: validationSchema_1.validationSchema,
                isGlobal: true,
            }),
            employees_module_1.EmployeesModule,
            raw_materials_module_1.RawMaterialsModule,
            products_module_1.ProductsModule,
            prisma_module_1.PrismaModule,
            customers_module_1.CustomersModule,
            financial_transactions_module_1.FinancialTransactionsModule,
            inventory_transactions_module_1.InventoryTransactionsModule,
            production_orders_module_1.ProductionOrdersModule,
            purchase_orders_module_1.PurchaseOrdersModule,
            purchase_order_details_module_1.PurchaseOrderDetailsModule,
            sales_orders_module_1.SalesOrdersModule,
            suppliers_module_1.SuppliersModule,
            sales_order_detail_module_1.SalesOrderDetailModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map