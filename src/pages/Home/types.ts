import * as z from "zod";
import { newCycleFormValidationSchema } from "./shemas";

export type NewCycleFormData = z.infer<typeof newCycleFormValidationSchema>;

export interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}