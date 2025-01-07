import { payload } from "../../components/app/const";
import { TOrdersFeedActions } from "./actions";

export type TOrder = {
  _id: string;
  number: number;
  name: string;
  status: string;
  createdAt: string;
  ingredients: string[];
};

export type TOrderFeedState = {
  readyOrders: number[];
  inProgressOrders: number[];
  totalOrders: number;
  totalTodayOrders: number;
  orders: TOrder[];
};

const initialState = {
  readyOrders: [],
  inProgressOrders: [],
  totalOrders: 0,
  totalTodayOrders: 0,
  orders: [],
};

export const reducer = (state = initialState, action: TOrdersFeedActions): TOrderFeedState => {
  switch (action.type) {
    case "UPDATE_ORDERS":
      const readyOrders = action.payload.orders
        .filter((order) => order.status === "done")
        .map((order) => order.number);
      
      const inProgressOrders = action.payload.orders
        .filter((order) => order.status === "pending")
        .map((order) => order.number);

      return {
        ...state,
        readyOrders: readyOrders,
        inProgressOrders: inProgressOrders,
        orders: action.payload.orders,
        totalOrders: action.payload.total,
        totalTodayOrders: action.payload.totalToday,
      };
    default:
      return state;
  }
};
