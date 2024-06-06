import { PrismaService } from '../prisma/prisma.service';
import { BaseService } from '../prisma/base.service';
import { Supplier } from '@prisma/client';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
export declare class SuppliersService extends BaseService<Supplier, CreateSupplierDto, UpdateSupplierDto> {
    private prismaService;
    constructor(prismaService: PrismaService);
}
