import { SET_CURRENT_INGREDIENT, TIngredientDetailsActions } from "./actions";
import { IIngredient } from "../burger-constructor/actions";

type TIngredientDetailsState = {
  currentIngredient: IIngredient | null;
};

export const initialState = {
  currentIngredient: null,
};

export const reducer = (state = initialState, action: TIngredientDetailsActions): TIngredientDetailsState => {
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
