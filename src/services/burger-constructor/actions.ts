import { nanoid } from "nanoid";

export const ADD_INGREDIENT: "ADD_INGREDIENT" = "ADD_INGREDIENT";
export const REMOVE_INGREDIENT: "REMOVE_INGREDIENT" = "REMOVE_INGREDIENT";
export const CLEANUP_CONSTRUCTOR_STATE: "CLEANUP_CONSTRUCTOR_STATE" = "CLEANUP_CONSTRUCTOR_STATE";
export const MOVE_INGREDIENT: "MOVE_INGREDIENT" = "MOVE_INGREDIENT";

export interface IIngredient {
  listId: string;
  name: string;
  price: number;
  image: string;
  type: string;
}

export interface IAddIngredientAction {
  readonly type: typeof ADD_INGREDIENT;
  readonly payload: IIngredient;
}

export interface IRemoveIngredientAction {
  readonly type: typeof REMOVE_INGREDIENT;
  readonly payload: IIngredient;
}

export interface ICleanupConstructorStateAction {
  readonly type: typeof CLEANUP_CONSTRUCTOR_STATE;
}

export interface IMoveIngredientAction {
  readonly type: typeof MOVE_INGREDIENT;
  readonly payload: { dragIndex: number; hoverIndex: number };
}

export type TBurgerConstructorActions = 
  | IAddIngredientAction
  | IRemoveIngredientAction
  | ICleanupConstructorStateAction
  | IMoveIngredientAction

export const addIngredient = (ingredient: IIngredient): IAddIngredientAction => {
  ingredient.listId = nanoid();

  return {
    type: ADD_INGREDIENT,
    payload: ingredient,
  };
};

export const removeIngredient = (ingredient: IIngredient): IRemoveIngredientAction => {
  return {
    type: REMOVE_INGREDIENT,
    payload: ingredient,
  };
};

export const cleanupConstructorState = (): ICleanupConstructorStateAction => {
  return {
    type: CLEANUP_CONSTRUCTOR_STATE,
  };
};

export const moveIngredient = (dragIndex: number, hoverIndex: number): IMoveIngredientAction => {
  return {
    type: MOVE_INGREDIENT,
    payload: { dragIndex, hoverIndex },
  };
};
