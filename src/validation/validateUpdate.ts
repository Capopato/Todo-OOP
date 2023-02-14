import { z } from "zod";

export const validateUpdate = (update: updateSchema) => {
  try {
    updateSchema.parse(update);
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

const updateSchema = z.object({
  title: z.string(),
  content: z.string(),
});

export type updateSchema = z.infer<typeof updateSchema>;
