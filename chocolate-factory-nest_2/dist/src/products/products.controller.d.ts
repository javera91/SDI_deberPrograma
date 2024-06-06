import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto): Promise<{
        id: string;
        productName: string;
        description: string;
        quantityInStock: number;
        unitPrice: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: string;
        productName: string;
        description: string;
        quantityInStock: number;
        unitPrice: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        productName: string;
        description: string;
        quantityInStock: number;
        unitPrice: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<{
        id: string;
        productName: string;
        description: string;
        quantityInStock: number;
        unitPrice: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        productName: string;
        description: string;
        quantityInStock: number;
        unitPrice: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
