import { PurchaseOrderDetailsService } from './purchase-order-details.service';
import { CreatePurchaseOrderDetailDto } from './dto/create-purchase-order-detail.dto';
import { UpdatePurchaseOrderDetailDto } from './dto/update-purchase-order-detail.dto';
export declare class PurchaseOrderDetailsController {
    private readonly purchaseOrderDetailsService;
    constructor(purchaseOrderDetailsService: PurchaseOrderDetailsService);
    create(createPurchaseOrderDetailDto: CreatePurchaseOrderDetailDto): Promise<{
        id: string;
        purchaseOrderId: string;
        materialId: string;
        quantity: number;
        unitPrice: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: string;
        purchaseOrderId: string;
        materialId: string;
        quantity: number;
        unitPrice: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        purchaseOrderId: string;
        materialId: string;
        quantity: number;
        unitPrice: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updatePurchaseOrderDetailDto: UpdatePurchaseOrderDetailDto): Promise<{
        id: string;
        purchaseOrderId: string;
        materialId: string;
        quantity: number;
        unitPrice: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        purchaseOrderId: string;
        materialId: string;
        quantity: number;
        unitPrice: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
