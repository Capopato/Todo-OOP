import { z } from "zod";

export const validateUpdate = (update: object): boolean => {
  try {
    updateModel.parse(update);
    console.log(`Update is successfully implemented`);
    return true;
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.log(error.issues);
    }
    console.log("Another error has occured. Please try again.");
    return false;
  }
};

const updateModel = z.object({
  username: z.string({ required_error: "Name is required", invalid_type_error: "Name must be a string" }).optional(),
  title: z
    .string()
    .min(3, { message: "Minimum of 3 characters is required." })
    .max(25, { message: "The title have a maximum of 25 characters." })
    .optional(),
  description: z
    .string()
    .min(5, { message: "Minimum of 5 characters is required." })
    .max(150, { message: "The title have a maximum of 25 characters." })
    .optional(),
});

export type updateModel = z.infer<typeof updateModel>;
