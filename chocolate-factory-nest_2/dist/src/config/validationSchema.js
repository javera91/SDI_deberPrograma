"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationSchema = void 0;
const Joi = require("joi");
exports.validationSchema = Joi.object({
    PORT: Joi.number().default(3000),
    DATABASE_URL: Joi.string().uri().required(),
});
//# sourceMappingURL=validationSchema.js.map