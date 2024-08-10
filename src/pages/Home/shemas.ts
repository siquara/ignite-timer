import * as z from "zod";

export const newCycleFormValidationSchema = z.object({
  task: z.string().min(1, "A tarefa deve ter pelo menos 1 caractere"),
  minutesAmount: z
    .number()
    .min(5, "O tempo mínimo é de 5 minutos")
    .max(60, "O tempo máximo é de 60 minutos"),
});
