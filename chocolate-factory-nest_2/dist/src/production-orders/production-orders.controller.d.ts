import { ProductionOrdersService } from './production-orders.service';
import { CreateProductionOrderDto } from './dto/create-production-order.dto';
import { UpdateProductionOrderDto } from './dto/update-production-order.dto';
export declare class ProductionOrdersController {
    private readonly productionOrdersService;
    constructor(productionOrdersService: ProductionOrdersService);
    create(createProductionOrderDto: CreateProductionOrderDto): Promise<{
        id: string;
        productId: string;
        orderDate: Date;
        quantity: number;
        status: string;
        employeeId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: string;
        productId: string;
        orderDate: Date;
        quantity: number;
        status: string;
        employeeId: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        productId: string;
        orderDate: Date;
        quantity: number;
        status: string;
        employeeId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateProductionOrderDto: UpdateProductionOrderDto): Promise<{
        id: string;
        productId: string;
        orderDate: Date;
        quantity: number;
        status: string;
        employeeId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        productId: string;
        orderDate: Date;
        quantity: number;
        status: string;
        employeeId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
