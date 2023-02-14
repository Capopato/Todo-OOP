"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUpdate = void 0;
const zod_1 = require("zod");
const validateUpdate = (update) => {
    try {
        updateSchema.parse(update);
        return true;
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            console.log(error.issues);
        }
        else {
            console.log(error);
        }
        return false;
    }
};
exports.validateUpdate = validateUpdate;
const updateSchema = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string(),
});
