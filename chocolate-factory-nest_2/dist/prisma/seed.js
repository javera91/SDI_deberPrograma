"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const uuid_1 = require("uuid");
const prisma = new client_1.PrismaClient();
async function main() {
    const supplier1Id = (0, uuid_1.v4)();
    const supplier2Id = (0, uuid_1.v4)();
    await prisma.supplier.createMany({
        data: [
            {
                id: supplier1Id,
                supplierName: 'Cocoa Supplier',
                contactName: 'John Supplier',
                contactPhone: '123-123-1234',
                contactEmail: 'cocoa@supplier.com',
                address: '123 Supplier St',
            },
            {
                id: supplier2Id,
                supplierName: 'Sugar Supplier',
                contactName: 'Jane Supplier',
                contactPhone: '321-321-4321',
                contactEmail: 'sugar@supplier.com',
                address: '456 Supplier Ave',
            },
        ],
    });
    const rawMaterial1Id = (0, uuid_1.v4)();
    const rawMaterial2Id = (0, uuid_1.v4)();
    await prisma.rawMaterial.createMany({
        data: [
            {
                id: rawMaterial1Id,
                materialName: 'Cocoa Beans',
                description: 'High quality cocoa beans',
                quantityInStock: 10000,
                unitPrice: 10.5,
                supplierId: supplier1Id,
            },
            {
                id: rawMaterial2Id,
                materialName: 'Sugar',
                description: 'Refined sugar',
                quantityInStock: 20000,
                unitPrice: 0.8,
                supplierId: supplier2Id,
            },
        ],
    });
    const customer1Id = (0, uuid_1.v4)();
    const customer2Id = (0, uuid_1.v4)();
    await prisma.customer.createMany({
        data: [
            {
                id: customer1Id,
                customerName: 'John Doe',
                contactName: 'Jane Doe',
                contactPhone: '123-456-7890',
                contactEmail: 'johndoe@example.com',
                address: '123 Main St',
            },
            {
                id: customer2Id,
                customerName: 'Alice Smith',
                contactName: 'Bob Smith',
                contactPhone: '987-654-3210',
                contactEmail: 'alice@example.com',
                address: '456 Elm St',
            },
        ],
    });
    const employee1Id = (0, uuid_1.v4)();
    const employee2Id = (0, uuid_1.v4)();
    await prisma.employee.createMany({
        data: [
            {
                id: employee1Id,
                firstName: 'Alice',
                lastName: 'Johnson',
                role: 'Manager',
                department: 'Sales',
                hireDate: new Date('2020-01-01T00:00:00Z'),
                salary: 50000,
            },
            {
                id: employee2Id,
                firstName: 'Bob',
                lastName: 'Brown',
                role: 'Developer',
                department: 'IT',
                hireDate: new Date('2019-06-15T00:00:00Z'),
                salary: 70000,
            },
        ],
    });
    const product1Id = (0, uuid_1.v4)();
    const product2Id = (0, uuid_1.v4)();
    await prisma.product.createMany({
        data: [
            {
                id: product1Id,
                productName: 'Chocolate Bar',
                description: 'Delicious chocolate bar',
                quantityInStock: 1000,
                unitPrice: 1.99,
            },
            {
                id: product2Id,
                productName: 'Gummy Bears',
                description: 'Colorful gummy bears',
                quantityInStock: 500,
                unitPrice: 2.99,
            },
        ],
    });
    const purchaseOrder1Id = (0, uuid_1.v4)();
    await prisma.purchaseOrder.create({
        data: {
            id: purchaseOrder1Id,
            supplierId: supplier1Id,
            orderDate: new Date('2021-07-01T00:00:00Z'),
            totalAmount: 1050,
            status: 'Completed',
        },
    });
    await prisma.purchaseOrderDetail.create({
        data: {
            id: (0, uuid_1.v4)(),
            purchaseOrderId: purchaseOrder1Id,
            materialId: rawMaterial1Id,
            quantity: 100,
            unitPrice: 10.5,
        },
    });
    const salesOrder1Id = (0, uuid_1.v4)();
    await prisma.salesOrder.create({
        data: {
            id: salesOrder1Id,
            customerId: customer1Id,
            orderDate: new Date('2021-08-01T00:00:00Z'),
            totalAmount: 199,
            status: 'Shipped',
        },
    });
    await prisma.salesOrderDetail.create({
        data: {
            id: (0, uuid_1.v4)(),
            salesOrderId: salesOrder1Id,
            productId: product1Id,
            quantity: 100,
            unitPrice: 1.99,
        },
    });
    await prisma.financialTransaction.createMany({
        data: [
            {
                id: (0, uuid_1.v4)(),
                transactionDate: new Date('2021-08-01T00:00:00Z'),
                amount: 199,
                transactionType: 'Sale',
                description: 'Sale of 100 Chocolate Bars',
                referenceId: salesOrder1Id,
                referenceType: 'SalesOrder',
            },
            {
                id: (0, uuid_1.v4)(),
                transactionDate: new Date('2021-07-01T00:00:00Z'),
                amount: 1050,
                transactionType: 'Purchase',
                description: 'Purchase of 100 Cocoa Beans',
                referenceId: purchaseOrder1Id,
                referenceType: 'PurchaseOrder',
            },
        ],
    });
    const productionOrder1Id = (0, uuid_1.v4)();
    await prisma.productionOrder.create({
        data: {
            id: productionOrder1Id,
            productId: product1Id,
            orderDate: new Date('2021-06-01T00:00:00Z'),
            quantity: 1000,
            status: 'Completed',
            employeeId: employee1Id,
        },
    });
    await prisma.inventoryTransaction.createMany({
        data: [
            {
                id: (0, uuid_1.v4)(),
                productId: product1Id,
                quantity: 1000,
                transactionType: 'Production',
                transactionDate: new Date('2021-06-01T00:00:00Z'),
            },
            {
                id: (0, uuid_1.v4)(),
                materialId: rawMaterial1Id,
                quantity: -1000,
                transactionType: 'Usage',
                transactionDate: new Date('2021-06-01T00:00:00Z'),
            },
        ],
    });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map