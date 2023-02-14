"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTodo = void 0;
const zod_1 = require("zod");
const validateTodo = (todo) => {
    try {
        validateSchema.parse(todo);
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
exports.validateTodo = validateTodo;
const validateSchema = zod_1.z.object({
    id: zod_1.z.string(),
    title: zod_1.z
        .string()
        .min(3, { message: "Title needs to be filled in with minimum of 3 characters." })
        .max(25, { message: "Title can maximum have 25 characters." }),
    content: zod_1.z
        .string()
        .min(5, { message: "Content needs at least 5 characters." })
        .max(150, { message: "Content can have a maximum of 150 characters." }),
    postedBy: zod_1.z.string(),
});
