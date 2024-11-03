import {
  LOAD_INGREDIENTS_SUCCESS,
  INGREDIENTS_LOADING,
  INGREDIENTS_ERROR,
} from "./actions.js";

export const initialState = {
    ingredientGroups: [],
    loading: false,
    error: false,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INGREDIENTS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case INGREDIENTS_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case LOAD_INGREDIENTS_SUCCESS:
      return {
        ...state,
        ingredientGroups: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
