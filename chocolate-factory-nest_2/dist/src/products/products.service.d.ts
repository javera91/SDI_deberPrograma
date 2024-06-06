import { PrismaService } from '../prisma/prisma.service';
import { BaseService } from '../prisma/base.service';
import { Product } from '@prisma/client';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsService extends BaseService<Product, CreateProductDto, UpdateProductDto> {
    private prismaService;
    constructor(prismaService: PrismaService);
}
