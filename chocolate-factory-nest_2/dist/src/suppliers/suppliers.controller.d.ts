import { SuppliersService } from './suppliers.service';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
export declare class SuppliersController {
    private readonly suppliersService;
    constructor(suppliersService: SuppliersService);
    create(createSupplierDto: CreateSupplierDto): Promise<{
        id: string;
        supplierName: string;
        contactName: string;
        contactPhone: string;
        contactEmail: string;
        address: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: string;
        supplierName: string;
        contactName: string;
        contactPhone: string;
        contactEmail: string;
        address: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        supplierName: string;
        contactName: string;
        contactPhone: string;
        contactEmail: string;
        address: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateSupplierDto: UpdateSupplierDto): Promise<{
        id: string;
        supplierName: string;
        contactName: string;
        contactPhone: string;
        contactEmail: string;
        address: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        supplierName: string;
        contactName: string;
        contactPhone: string;
        contactEmail: string;
        address: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
