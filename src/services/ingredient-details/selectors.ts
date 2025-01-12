import { RootState } from "../store";

export const getCurrentIngredient = (state: RootState) => {
  return state.ingredientDetails.currentIngredient;
};
