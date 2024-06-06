import { PrismaService } from '../prisma/prisma.service';
import { BaseService } from '../prisma/base.service';
import { Employee } from '@prisma/client';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
export declare class EmployeesService extends BaseService<Employee, CreateEmployeeDto, UpdateEmployeeDto> {
    private prismaService;
    constructor(prismaService: PrismaService);
}
