import * as z from "zod";
import { newCycleFormValidationSchema } from "./shemas";

export type NewCycleFormData = z.infer<typeof newCycleFormValidationSchema>;