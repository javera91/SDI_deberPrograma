"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductionOrderDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_production_order_dto_1 = require("./create-production-order.dto");
class UpdateProductionOrderDto extends (0, swagger_1.PartialType)(create_production_order_dto_1.CreateProductionOrderDto) {
}
exports.UpdateProductionOrderDto = UpdateProductionOrderDto;
//# sourceMappingURL=update-production-order.dto.js.map