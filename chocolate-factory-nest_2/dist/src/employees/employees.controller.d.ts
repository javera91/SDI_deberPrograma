import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
export declare class EmployeesController {
    private readonly employeesService;
    constructor(employeesService: EmployeesService);
    create(createEmployeeDto: CreateEmployeeDto): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        role: string;
        department: string;
        hireDate: Date;
        salary: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        role: string;
        department: string;
        hireDate: Date;
        salary: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        role: string;
        department: string;
        hireDate: Date;
        salary: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateEmployeeDto: UpdateEmployeeDto): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        role: string;
        department: string;
        hireDate: Date;
        salary: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        role: string;
        department: string;
        hireDate: Date;
        salary: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
