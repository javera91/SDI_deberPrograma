import { InventoryTransactionsService } from './inventory-transactions.service';
import { CreateInventoryTransactionDto } from './dto/create-inventory-transaction.dto';
import { UpdateInventoryTransactionDto } from './dto/update-inventory-transaction.dto';
export declare class InventoryTransactionsController {
    private readonly inventoryTransactionsService;
    constructor(inventoryTransactionsService: InventoryTransactionsService);
    create(createInventoryTransactionDto: CreateInventoryTransactionDto): Promise<{
        id: string;
        productId: string;
        materialId: string;
        quantity: number;
        transactionType: string;
        transactionDate: Date;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: string;
        productId: string;
        materialId: string;
        quantity: number;
        transactionType: string;
        transactionDate: Date;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        productId: string;
        materialId: string;
        quantity: number;
        transactionType: string;
        transactionDate: Date;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateInventoryTransactionDto: UpdateInventoryTransactionDto): Promise<{
        id: string;
        productId: string;
        materialId: string;
        quantity: number;
        transactionType: string;
        transactionDate: Date;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        productId: string;
        materialId: string;
        quantity: number;
        transactionType: string;
        transactionDate: Date;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
