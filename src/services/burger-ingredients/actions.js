import { getBurgerIngredients } from "../../utils/stellar-burger-api.ts";

export const LOAD_INGREDIENTS_SUCCESS = "LOAD_INGREDIENTS_SUCCESS";
export const INGREDIENTS_LOADING = "INGREDIENTS_LOADING";
export const INGREDIENTS_ERROR = "INGREDIENTS_ERROR";

export const loadIngredients = () => (dispatch) => {
  dispatch({ type: INGREDIENTS_LOADING });

  getBurgerIngredients()
    .then((ingredients) => {
      const buns = ingredients.data.filter(
        (ingredient) => ingredient.type === "bun"
      );
      const sauces = ingredients.data.filter(
        (ingredient) => ingredient.type === "sauce"
      );
      const mains = ingredients.data.filter(
        (ingredient) => ingredient.type === "main"
      );

      const ingredientGroups = [
        {
          groupName: "Булки",
          ingredients: buns,
        },
        {
          groupName: "Соусы",
          ingredients: sauces,
        },
        {
          groupName: "Начинки",
          ingredients: mains,
        },
      ];

      dispatch({
        type: LOAD_INGREDIENTS_SUCCESS,
        payload: ingredientGroups,
      });
    })
    .catch(() => {
      dispatch({ type: INGREDIENTS_ERROR });
    });
};
