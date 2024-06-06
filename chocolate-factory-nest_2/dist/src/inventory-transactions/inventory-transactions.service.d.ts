import { PrismaService } from '../prisma/prisma.service';
import { BaseService } from '../prisma/base.service';
import { InventoryTransaction } from '@prisma/client';
import { CreateInventoryTransactionDto } from './dto/create-inventory-transaction.dto';
import { UpdateInventoryTransactionDto } from './dto/update-inventory-transaction.dto';
export declare class InventoryTransactionsService extends BaseService<InventoryTransaction, CreateInventoryTransactionDto, UpdateInventoryTransactionDto> {
    private prismaService;
    constructor(prismaService: PrismaService);
}
