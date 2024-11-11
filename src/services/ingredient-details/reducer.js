import { SET_CURRENT_INGREDIENT } from "./actions.js";

export const initialState = {
  currentIngredient: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_INGREDIENT:
      return {
        ...state,
        currentIngredient: action.payload,
      };
    default:
      return state;
  }
};
