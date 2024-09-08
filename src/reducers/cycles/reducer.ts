import { ActionTypes, CyclesState } from "./types";
import { produce } from "immer";

export function cyclesRecucers(state: CyclesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.newCycle);
        draft.activeCycleId = action.payload.newCycle.id;
      });
    case ActionTypes.INTERRUPT_NEW_CYCLE: {
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId;
      });

      if (currentCycleIndex < 0) {
        return state;
      }
      return produce(state, (draft) => {
        draft.cycles[currentCycleIndex].interruptedDate = new Date();
        draft.activeCycleId = null;
      });
    }
    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId;
      });

      if (currentCycleIndex < 0) {
        return state;
      }
      return produce(state, (draft) => {
        draft.cycles[currentCycleIndex].finishedDate = new Date();
        draft.activeCycleId = null;
      });
    }
    default:
      return state;
  }
}
