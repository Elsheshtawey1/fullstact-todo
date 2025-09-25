// schema
import { z } from "zod";
const todoSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters").max(30, "Title must be at most 30 characters"),
  body: z.string().max(80, "Description must be at most 80 characters").optional(),
  completed: z.boolean(),
});

type TodoFormValues = z.infer<typeof todoSchema>;
export { todoSchema };
export type { TodoFormValues };