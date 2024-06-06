import { PrismaService } from '../prisma/prisma.service';
import { BaseService } from '../prisma/base.service';
import { PurchaseOrderDetail } from '@prisma/client';
import { CreatePurchaseOrderDetailDto } from './dto/create-purchase-order-detail.dto';
import { UpdatePurchaseOrderDetailDto } from './dto/update-purchase-order-detail.dto';
export declare class PurchaseOrderDetailsService extends BaseService<PurchaseOrderDetail, CreatePurchaseOrderDetailDto, UpdatePurchaseOrderDetailDto> {
    private prismaService;
    constructor(prismaService: PrismaService);
}
