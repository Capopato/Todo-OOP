"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUpdate = void 0;
const zod_1 = require("zod");
const validateUpdate = (update) => {
    try {
        updateModel.parse(update);
        console.log(`Update is successfully implemented`);
        return true;
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            console.log(error.issues);
        }
        console.log("Another error has occured. Please try again.");
        return false;
    }
};
exports.validateUpdate = validateUpdate;
const updateModel = zod_1.z.object({
    username: zod_1.z.string({ required_error: "Name is required", invalid_type_error: "Name must be a string" }).optional(),
    title: zod_1.z
        .string()
        .min(3, { message: "Minimum of 3 characters is required." })
        .max(25, { message: "The title have a maximum of 25 characters." })
        .optional(),
    description: zod_1.z
        .string()
        .min(5, { message: "Minimum of 5 characters is required." })
        .max(150, { message: "The title have a maximum of 25 characters." })
        .optional(),
});
