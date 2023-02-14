import { TodoItem } from "../classes/todo.class";
import { z } from "zod";

export const validateTodo = (todo: validateSchema): boolean => {
  try {
    validateSchema.parse(todo);
    return true;
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.log(error.issues);
    } else {
      console.log(error);
    }
    return false;
  }
};

const validateSchema = z.object({
  id: z.string(),
  title: z
    .string()
    .min(3, { message: "Title needs to be filled in with minimum of 3 characters." })
    .max(25, { message: "Title can maximum have 25 characters." }),
  content: z
    .string()
    .min(5, { message: "Content needs at least 5 characters." })
    .max(150, { message: "Content can have a maximum of 150 characters." }),
  postedBy: z.string(),
});

export type validateSchema = z.infer<typeof validateSchema>;
