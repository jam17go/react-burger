import { IIngredient } from "../burger-constructor/actions";

export const SET_CURRENT_INGREDIENT = "SET_CURRENT_INGREDIENT";

export interface IAddIngredientAction {
  readonly type: typeof SET_CURRENT_INGREDIENT;
  readonly payload: IIngredient | null;
}

export const setCurrentIngredient = (ingredient: IIngredient | null): IAddIngredientAction => ({
  type: SET_CURRENT_INGREDIENT,
  payload: ingredient,
});

export type TIngredientDetailsActions = IAddIngredientAction;
