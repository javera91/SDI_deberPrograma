import { SalesOrdersService } from './sales-orders.service';
import { CreateSalesOrderDto } from './dto/create-sales-order.dto';
import { UpdateSalesOrderDto } from './dto/update-sales-order.dto';
export declare class SalesOrdersController {
    private readonly salesOrdersService;
    constructor(salesOrdersService: SalesOrdersService);
    create(createSalesOrderDto: CreateSalesOrderDto): Promise<{
        id: string;
        customerId: string;
        orderDate: Date;
        totalAmount: number;
        status: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: string;
        customerId: string;
        orderDate: Date;
        totalAmount: number;
        status: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        customerId: string;
        orderDate: Date;
        totalAmount: number;
        status: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateSalesOrderDto: UpdateSalesOrderDto): Promise<{
        id: string;
        customerId: string;
        orderDate: Date;
        totalAmount: number;
        status: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        customerId: string;
        orderDate: Date;
        totalAmount: number;
        status: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
