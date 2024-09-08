import { Cycle } from "../contexts/types";

export interface CyclesState {
  cycles: Cycle[];
  activeCycleId: string | null;
}

export enum ActionTypes {
  ADD_NEW_CYCLE = "ADD_NEW_CYCLE",
  INTERRUPT_NEW_CYCLE = "INTERRUPT_NEW_CYCLE",
  MARK_CURRENT_CYCLE_AS_FINISHED = "MARK_CURRENT_CYCLE_AS_FINISHED",
}
