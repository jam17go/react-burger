import { nanoid } from "nanoid";

export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
export const CLEANUP_CONSTRUCTOR_STATE = "CLEANUP_CONSTRUCTOR_STATE";

export const addIngredient = (ingredient) => {
  ingredient.listId = nanoid();

  return {
    type: ADD_INGREDIENT,
    payload: ingredient,
  };
};

export const removeIngredient = (ingredient) => {
  return {
    type: REMOVE_INGREDIENT,
    payload: ingredient,
  };
};

export const cleanupConstructorState = () => {
  return {
    type: CLEANUP_CONSTRUCTOR_STATE,
  };
}