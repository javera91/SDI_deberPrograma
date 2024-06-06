import { PrismaService } from './prisma.service';
export declare class BaseService<T, CreateDto, UpdateDto> {
    private prisma;
    private model;
    constructor(prisma: PrismaService, model: {
        name: string;
    });
    create(data: CreateDto): Promise<T>;
    findAll(): Promise<T[]>;
    findOne(id: string): Promise<T | null>;
    update(id: string, data: UpdateDto): Promise<T>;
    remove(id: string): Promise<T>;
}
