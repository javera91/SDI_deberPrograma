import { PrismaService } from '../prisma/prisma.service';
import { BaseService } from '../prisma/base.service';
import { PurchaseOrder } from '@prisma/client';
import { CreatePurchaseOrderDto } from './dto/create-purchase-order.dto';
import { UpdatePurchaseOrderDto } from './dto/update-purchase-order.dto';
export declare class PurchaseOrdersService extends BaseService<PurchaseOrder, CreatePurchaseOrderDto, UpdatePurchaseOrderDto> {
    private prismaService;
    constructor(prismaService: PrismaService);
}
