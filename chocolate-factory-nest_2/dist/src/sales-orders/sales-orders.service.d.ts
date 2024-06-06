import { PrismaService } from '../prisma/prisma.service';
import { BaseService } from '../prisma/base.service';
import { SalesOrder } from '@prisma/client';
import { CreateSalesOrderDto } from './dto/create-sales-order.dto';
import { UpdateSalesOrderDto } from './dto/update-sales-order.dto';
export declare class SalesOrdersService extends BaseService<SalesOrder, CreateSalesOrderDto, UpdateSalesOrderDto> {
    private prismaService;
    constructor(prismaService: PrismaService);
}
