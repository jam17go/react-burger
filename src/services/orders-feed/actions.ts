import { TOrder } from "./reducer";

export const UPDATE_ORDERS: "UPDATE_ORDERS" = "UPDATE_ORDERS";

interface IOrdersResponse {
  orders: TOrder[];
  total: number;
  totalToday: number;
}

export interface IUpdateOrdersAction {
  readonly type: typeof UPDATE_ORDERS;
  readonly payload: IOrdersResponse;
}

export const updateOrders = (
  ordersResponse: IOrdersResponse
): IUpdateOrdersAction => {
  return {
    type: UPDATE_ORDERS,
    payload: ordersResponse,
  };
};

export type TOrdersFeedActions = IUpdateOrdersAction;
