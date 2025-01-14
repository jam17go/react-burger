import { TIngredient } from "../orders-feed/reducer";
import { RootState } from "../store";

export const getSelectedIngredients = (state: RootState) => {
  return state.burgerConstructor.ingredients;
};

export const getSelectedBun = (state: RootState) => {
  return state.burgerConstructor.bun;
};

export const getItemCount = (state: RootState, item: TIngredient) => {
  const searchList = [
    ...state.burgerConstructor.ingredients,
    ...(state.burgerConstructor.bun ? [state.burgerConstructor.bun] : []),
  ];

  return searchList.filter((ingredient) => ingredient._id === item._id).length;
};

export const getTotalPrice = (state: RootState) => {
  const ingredients = state.burgerConstructor.ingredients;
  const bun = state.burgerConstructor.bun;
  const ingredientsPrice = ingredients.reduce(
    (acc, ingredient) => acc + ingredient.price,
    0
  );
  const bunPrice = bun ? bun.price * 2 : 0;

  return ingredientsPrice + bunPrice;
};

export const getOrderIngredientsList = (state: RootState) => {
  const ingredients = [
    ...(state.burgerConstructor.bun ? [state.burgerConstructor.bun] : []),
    ...state.burgerConstructor.ingredients,
    ...(state.burgerConstructor.bun ? [state.burgerConstructor.bun] : []),
  ];

  return ingredients.map((ingredient) => ingredient._id);
};
