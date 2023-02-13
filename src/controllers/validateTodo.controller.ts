import { z } from "zod";
import { throwError } from "../utils/error.util";

export const validateTodo = (todoItem: todoModel): boolean => {
  try {
    todoModel.parse(todoItem);
    console.log("Todo item is ok.");
    return true;
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.log(error.issues);
    } else {
      console.log("Something else went wrong. Please try again.");
    }
    return false;
  }
};

const todoModel = z.object({
  id: z.string().uuid(),
  username: z.string({ required_error: "Name is required", invalid_type_error: "Name must be a string" }),
  title: z.string().min(3, { message: "Minimum of 3 characters is required." }).max(25, { message: "The title have a maximum of 25 characters." }),
  description: z
    .string()
    .min(5, { message: "Minimum of 5 characters is required." })
    .max(150, { message: "The title have a maximum of 25 characters." }),
  postedAt: z.date(),
});

export type todoModel = z.infer<typeof todoModel>;
