import { PrismaService } from '../prisma/prisma.service';
import { BaseService } from '../prisma/base.service';
import { FinancialTransaction } from '@prisma/client';
import { CreateFinancialTransactionDto } from './dto/create-financial-transaction.dto';
import { UpdateFinancialTransactionDto } from './dto/update-financial-transaction.dto';
export declare class FinancialTransactionsService extends BaseService<FinancialTransaction, CreateFinancialTransactionDto, UpdateFinancialTransactionDto> {
    private prismaService;
    constructor(prismaService: PrismaService);
}
