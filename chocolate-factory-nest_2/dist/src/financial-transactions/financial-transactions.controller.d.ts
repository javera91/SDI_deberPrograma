import { FinancialTransactionsService } from './financial-transactions.service';
import { CreateFinancialTransactionDto } from './dto/create-financial-transaction.dto';
import { UpdateFinancialTransactionDto } from './dto/update-financial-transaction.dto';
export declare class FinancialTransactionsController {
    private readonly financialTransactionsService;
    constructor(financialTransactionsService: FinancialTransactionsService);
    create(createFinancialTransactionDto: CreateFinancialTransactionDto): Promise<{
        id: string;
        transactionDate: Date;
        amount: number;
        transactionType: string;
        description: string;
        referenceId: string;
        referenceType: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: string;
        transactionDate: Date;
        amount: number;
        transactionType: string;
        description: string;
        referenceId: string;
        referenceType: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        transactionDate: Date;
        amount: number;
        transactionType: string;
        description: string;
        referenceId: string;
        referenceType: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateFinancialTransactionDto: UpdateFinancialTransactionDto): Promise<{
        id: string;
        transactionDate: Date;
        amount: number;
        transactionType: string;
        description: string;
        referenceId: string;
        referenceType: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        transactionDate: Date;
        amount: number;
        transactionType: string;
        description: string;
        referenceId: string;
        referenceType: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
