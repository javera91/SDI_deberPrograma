"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
        url: process.env.DATABASE_URL ||
            'postgresql://user:password@localhost:5432/test',
    },
});
//# sourceMappingURL=configuration.js.map