import { PrismaService } from '../prisma/prisma.service';
import { BaseService } from '../prisma/base.service';
import { ProductionOrder } from '@prisma/client';
import { CreateProductionOrderDto } from './dto/create-production-order.dto';
import { UpdateProductionOrderDto } from './dto/update-production-order.dto';
export declare class ProductionOrdersService extends BaseService<ProductionOrder, CreateProductionOrderDto, UpdateProductionOrderDto> {
    private prismaService;
    constructor(prismaService: PrismaService);
}
