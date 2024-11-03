import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  CLEANUP_CONSTRUCTOR_STATE,
} from "./actions.js";

const initialState = {
  ingredients: [],
  bun: null,
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
        ingredients: [...state.ingredients, {...action.payload}],
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
    default:
      return state;
  }
};
