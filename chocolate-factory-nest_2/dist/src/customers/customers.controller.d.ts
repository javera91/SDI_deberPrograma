import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
export declare class CustomersController {
    private readonly customersService;
    constructor(customersService: CustomersService);
    create(createCustomerDto: CreateCustomerDto): Promise<{
        id: string;
        customerName: string;
        contactName: string;
        contactPhone: string;
        contactEmail: string;
        address: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: string;
        customerName: string;
        contactName: string;
        contactPhone: string;
        contactEmail: string;
        address: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        customerName: string;
        contactName: string;
        contactPhone: string;
        contactEmail: string;
        address: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateCustomerDto: UpdateCustomerDto): Promise<{
        id: string;
        customerName: string;
        contactName: string;
        contactPhone: string;
        contactEmail: string;
        address: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        customerName: string;
        contactName: string;
        contactPhone: string;
        contactEmail: string;
        address: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
