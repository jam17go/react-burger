import { LOAD_ORDER_SUCCESS, ORDER_LOADING, ORDER_ERROR } from "./actions";

import { TFeedOrder } from "./actions";

export type TIngredient = {
    _id: string;
    name: string;
    price: number;
    image: string;
};

export type TOrder = {
    _id: string;
    ingredients: TIngredient[];
    status: string;
    name: string;
    number: number;
    createdAt: string;
    updatedAt: string;
    price: number;
};

export type TFeedOrderState = {
  order: TOrder | null;
  loading: boolean;
  error: boolean;
};

export const initialState = {
  order: null,
  loading: false,
  error: false,
};

export const reducer = (
  state = initialState,
  action: TFeedOrder
): TFeedOrderState => {
  switch (action.type) {
    case ORDER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ORDER_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case LOAD_ORDER_SUCCESS:
      return {
        ...state,
        order: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

