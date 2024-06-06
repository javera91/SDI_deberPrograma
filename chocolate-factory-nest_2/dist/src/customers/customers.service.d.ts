import { PrismaService } from '../prisma/prisma.service';
import { BaseService } from '../prisma/base.service';
import { Customer } from '@prisma/client';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
export declare class CustomersService extends BaseService<Customer, CreateCustomerDto, UpdateCustomerDto> {
    private prismaService;
    constructor(prismaService: PrismaService);
}
