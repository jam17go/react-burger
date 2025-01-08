export const UPDATE_ORDERS: "UPDATE_ORDERS" = "UPDATE_ORDERS";

export type TOrder = {
    _id: string;
    number: number;
    name: string;
    status: string;
    createdAt: string;
    ingredients: string[];
  };

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
