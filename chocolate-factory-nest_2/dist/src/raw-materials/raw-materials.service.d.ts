import { PrismaService } from '../prisma/prisma.service';
import { BaseService } from '../prisma/base.service';
import { RawMaterial } from '@prisma/client';
import { CreateRawMaterialDto } from './dto/create-raw-material.dto';
import { UpdateRawMaterialDto } from './dto/update-raw-material.dto';
export declare class RawMaterialsService extends BaseService<RawMaterial, CreateRawMaterialDto, UpdateRawMaterialDto> {
    private prismaService;
    constructor(prismaService: PrismaService);
}
