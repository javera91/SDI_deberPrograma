import { PurchaseOrdersService } from './purchase-orders.service';
import { CreatePurchaseOrderDto } from './dto/create-purchase-order.dto';
import { UpdatePurchaseOrderDto } from './dto/update-purchase-order.dto';
export declare class PurchaseOrdersController {
    private readonly purchaseOrdersService;
    constructor(purchaseOrdersService: PurchaseOrdersService);
    create(createPurchaseOrderDto: CreatePurchaseOrderDto): Promise<{
        id: string;
        supplierId: string;
        orderDate: Date;
        totalAmount: number;
        status: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: string;
        supplierId: string;
        orderDate: Date;
        totalAmount: number;
        status: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        supplierId: string;
        orderDate: Date;
        totalAmount: number;
        status: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updatePurchaseOrderDto: UpdatePurchaseOrderDto): Promise<{
        id: string;
        supplierId: string;
        orderDate: Date;
        totalAmount: number;
        status: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        supplierId: string;
        orderDate: Date;
        totalAmount: number;
        status: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
