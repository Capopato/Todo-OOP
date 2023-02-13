"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTodo = void 0;
const zod_1 = require("zod");
const validateTodo = (todoItem) => {
    try {
        todoModel.parse(todoItem);
        console.log("Todo item is ok.");
        return true;
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            console.log(error.issues);
        }
        else {
            console.log("Something else went wrong. Please try again.");
        }
        return false;
    }
};
exports.validateTodo = validateTodo;
const todoModel = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    username: zod_1.z.string({ required_error: "Name is required", invalid_type_error: "Name must be a string" }),
    title: zod_1.z.string().min(3, { message: "Minimum of 3 characters is required." }).max(25, { message: "The title have a maximum of 25 characters." }),
    description: zod_1.z
        .string()
        .min(5, { message: "Minimum of 5 characters is required." })
        .max(150, { message: "The title have a maximum of 25 characters." }),
    postedAt: zod_1.z.date(),
});
