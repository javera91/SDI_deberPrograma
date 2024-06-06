"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSalesOrderDetailDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_sales_order_detail_dto_1 = require("./create-sales-order-detail.dto");
class UpdateSalesOrderDetailDto extends (0, swagger_1.PartialType)(create_sales_order_detail_dto_1.CreateSalesOrderDetailDto) {
}
exports.UpdateSalesOrderDetailDto = UpdateSalesOrderDetailDto;
//# sourceMappingURL=update-sales-order-detail.dto.js.map