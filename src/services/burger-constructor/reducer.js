import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  CLEANUP_CONSTRUCTOR_STATE,
  MOVE_INGREDIENT,
} from "./actions.js";

const initialState = {
  ingredients: [],
  bun: null,
  activeIngredientGroup: "Булки",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      if (action.payload.type === "bun") {
        return {
          ...state,
          bun: action.payload,
        };
      }
      return {
        ...state,
        ingredients: [...state.ingredients, { ...action.payload }],
      };
    case REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter(
          (ingredient) => ingredient.listId !== action.payload.listId
        ),
      };
    case CLEANUP_CONSTRUCTOR_STATE:
      return {
        ...initialState,
      };
    case MOVE_INGREDIENT:
      const { dragIndex, hoverIndex } = action.payload;
      const dragIngredient = state.ingredients[dragIndex];
      const updatedIngredients = [...state.ingredients];
      updatedIngredients.splice(dragIndex, 1);
      updatedIngredients.splice(hoverIndex, 0, dragIngredient);

      return {
        ...state,
        ingredients: updatedIngredients,
      };
    default:
      return state;
  }
};
