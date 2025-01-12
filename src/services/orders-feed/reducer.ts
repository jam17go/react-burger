import { TOrdersFeedActions } from "./actions";
import { getIngredientGroupsData } from "../burger-ingredients/selectors";
import { IOrderCalculated } from "./actions";

export type TOrderFeedState = {
  readyOrders: string[];
  inProgressOrders: string[];
  totalOrders: number | null;
  totalTodayOrders: number | null;
  orders: IOrderCalculated[];
  updateComplete: boolean;
  ordersApiResponse: any;
  mode: string;
  url: string;
};

export type TIngredient = {
  _id: string;
  name: string;
  image: string;
  price: number;
}

export type TOrder = {
  _id: string;
  number: number;
  name: string;
  status: string;
  createdAt: string;
  ingredients: string[];
}

// export type TOrderCalculated = {
//   _id: string;
//   number: number;
//   name: string;
//   status: string;
//   createdAt: string;
//   ingredients: TIngredient[];
//   price: number;
// }

const initialState = {
  readyOrders: [],
  inProgressOrders: [],
  totalOrders: null,
  totalTodayOrders: null,
  ordersApiResponse: null, 
  orders: [],
  updateComplete: false,
  calculationComplete: false,
  mode: "",
  url: "",
};

export const reducer = (state = initialState, action: TOrdersFeedActions): TOrderFeedState => {
  switch (action.type) {
    case "SET_ORDERS":
      return {
        ...state,
        readyOrders: action.payload.readyOrders,
        inProgressOrders: action.payload.inProgressOrders,
        orders: action.payload.orders,
        totalOrders: action.payload.total,
        totalTodayOrders: action.payload.totalToday,
      };
    case "UPDATE_ORDERS":
      return {
        ...state,
        ordersApiResponse: action.payload,
        url: action.payload.url,
      }
    case "UPDATE_ORDERS_PENDING":
      return {
        ...state,
        updateComplete: false,
      };
    case "UPDATE_ORDERS_SUCCESS":
      return {
        ...state,
        updateComplete: true,
      };
    case "FLUSH_STATE":
      return {
        ...initialState,
      };
    case "SET_MODE":
      return {
        ...state,
        mode: action.payload,
      };
    default:
      return state;
  }
};
