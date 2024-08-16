import { useForm } from "react-hook-form";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { newCycleFormValidationSchema } from "./shemas";
import { NewCycleFormData } from "./types";

export function NewCycleForm() {

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });
return(
  <FormContainer>
  <label htmlFor=""> Vou trabalhar em</label>
  <TaskInput
    type="task "
    placeholder="Dê um nome para o seu projeto"
    list="task-suggestions"
    disabled={!!activeCycle}
    {...register("task")}
  />

  <datalist id="task-suggestions">
    <option value="opção 1" />
    <option value="opção 2" />
    <option value="opção 3" />
    <option value="opção 4" />
  </datalist>

  <label htmlFor="">durante</label>
  <MinutesAmountInput
    type="number"
    id="minutesAmount"
    placeholder="00"
    step={5}
    min={5}
    max={60}
    disabled={!!activeCycle}
    {...register("minutesAmount", { valueAsNumber: true })}
  />
  <span>minutos</span>
</FormContainer>
)
}