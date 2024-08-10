import { Play } from "phosphor-react";
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountDownButton,
  TaskInput,
} from "./styles";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const newCycleFormValidationSchema = z.object({
  task: z.string().min(1, "A tarefa deve ter pelo menos 1 caractere"),
  minutesAmount: z
    .number()
    .min(5, "O tempo mínimo é de 5 minutos")
    .max(60, "O tempo máximo é de 60 minutos"),
});
export function Home() {
  const { register, handleSubmit, watch } = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
  });

  function handleCreateNewCycle(data: any) {
    console.log(data);
  }

  const task = watch("task");
  const isSubmitButtonDisabled = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor=""> Vou trabalhar em</label>
          <TaskInput
            type="task "
            placeholder="Dê um nome para o seu projeto"
            list="task-suggestions"
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
            {...register("minutesAmount", { valueAsNumber: true })}
          />
          <span>minutos</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountDownButton disabled={isSubmitButtonDisabled} type="submit">
          <Play size={24} />
          Começar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  );
}
