import { SalesOrderDetailsService } from './sales-order-detail.service';
import { CreateSalesOrderDetailDto } from './dto/create-sales-order-detail.dto';
import { UpdateSalesOrderDetailDto } from './dto/update-sales-order-detail.dto';
export declare class SalesOrderDetailsController {
    private readonly salesOrderDetailsService;
    constructor(salesOrderDetailsService: SalesOrderDetailsService);
    create(createSalesOrderDetailDto: CreateSalesOrderDetailDto): Promise<{
        id: string;
        materialName: string;
        description: string;
        quantityInStock: number;
        unitPrice: number;
        supplierId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: string;
        materialName: string;
        description: string;
        quantityInStock: number;
        unitPrice: number;
        supplierId: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        materialName: string;
        description: string;
        quantityInStock: number;
        unitPrice: number;
        supplierId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateSalesOrderDetailDto: UpdateSalesOrderDetailDto): Promise<{
        id: string;
        materialName: string;
        description: string;
        quantityInStock: number;
        unitPrice: number;
        supplierId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        materialName: string;
        description: string;
        quantityInStock: number;
        unitPrice: number;
        supplierId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
