import { RawMaterialsService } from './raw-materials.service';
import { CreateRawMaterialDto } from './dto/create-raw-material.dto';
import { UpdateRawMaterialDto } from './dto/update-raw-material.dto';
export declare class RawMaterialsController {
    private readonly rawMaterialsService;
    constructor(rawMaterialsService: RawMaterialsService);
    create(createRawMaterialDto: CreateRawMaterialDto): Promise<{
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
    update(id: string, updateRawMaterialDto: UpdateRawMaterialDto): Promise<{
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
