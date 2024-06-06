"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
class BaseService {
    constructor(prisma, model) {
        this.prisma = prisma;
        this.model = model;
    }
    async create(data) {
        return this.prisma[this.model.name].create({ data });
    }
    async findAll() {
        return this.prisma[this.model.name].findMany();
    }
    async findOne(id) {
        return this.prisma[this.model.name].findUnique({ where: { id } });
    }
    async update(id, data) {
        return this.prisma[this.model.name].update({ where: { id }, data });
    }
    async remove(id) {
        return this.prisma[this.model.name].delete({ where: { id } });
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map