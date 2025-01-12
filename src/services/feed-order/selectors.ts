import { RootState } from "../store";

export const getCurrentOrder = (state: RootState) => {
  return state.feedOrder.order;
};
