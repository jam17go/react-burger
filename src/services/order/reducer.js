import {
  PLACE_ORDER_ERROR,
  PLACE_ORDER_PENDING,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_RESET,
} from "./actions.js";

export const initialState = {
  order: null,
  loading: false,
  error: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PLACE_ORDER_PENDING:
      return {
        ...state,
        loading: true,
        order: null,
      };
    case PLACE_ORDER_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case PLACE_ORDER_SUCCESS:
      return {
        ...state,
        order: action.payload,
        loading: false,
        error: false,
      };
    case PLACE_ORDER_RESET:
      return {
        ...state,
        order: null,
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};
