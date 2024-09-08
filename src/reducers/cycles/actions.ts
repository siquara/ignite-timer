import { Cycle } from "../../contexts/types";
import { ActionTypes } from "./types";

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  };
}

export function interruptNewCycleAction() {
  return {
    type: ActionTypes.INTERRUPT_NEW_CYCLE,
  }
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  };
}
