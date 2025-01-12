import { getBurgerIngredients } from "../../utils/stellar-burger-api";
import { getAllIngredients } from "../burger-ingredients/selectors";
import { AppDispatch } from "../hooks";

export const UPDATE_ORDERS: "UPDATE_ORDERS" = "UPDATE_ORDERS";
export const UPDATE_ORDERS_PENDING: "UPDATE_ORDERS_PENDING" =
  "UPDATE_ORDERS_PENDING";
export const UPDATE_ORDERS_SUCCESS: "UPDATE_ORDERS_SUCCESS" =
  "UPDATE_ORDERS_SUCCESS";
export const SET_ORDERS: "SET_ORDERS" = "SET_ORDERS";
export const CALCULATE_ORDERS: "CALCULATE_ORDERS" = "CALCULATE_ORDERS";
export const FLUSH_STATE: "FLUSH_STATE" = "FLUSH_STATE";
export const SET_MODE: "SET_MODE" = "SET_MODE";

export type TOrder = {
  _id: string;
  number: string;
  name: string;
  status: string;
  createdAt: string;
  ingredients: string[];
};

export interface IOrdersResponse {
  orders: TOrder[];
  total: number;
  totalToday: number;
  url: string;
}

export interface IOrdersParsed {
  readyOrders: string[];
  inProgressOrders: string[];
  orders: IOrderCalculated[];
  total: number;
  totalToday: number;
}

export interface IIngredient {
  _id: string;
  name: string;
  image: string;
  price: number;
}

export interface IOrderCalculated {
  _id: string;
  number: string;
  name: string;
  status: string;
  createdAt: string;
  ingredients: IIngredient[];
  price: number;
}

export interface IUpdateOrdersAction {
  readonly type: typeof UPDATE_ORDERS;
  readonly payload: IOrdersResponse;
}

export interface IUpdateOrdersPendingAction {
  readonly type: typeof UPDATE_ORDERS_PENDING;
}

export interface IUpdateOrdersSuccessAction {
  readonly type: typeof UPDATE_ORDERS_SUCCESS;
}

export interface ISetOrdersAction {
  readonly type: typeof SET_ORDERS;
  readonly payload: IOrdersParsed;
}

export interface IFlushStateAction {
  readonly type: typeof FLUSH_STATE;
}

export interface ISetModeAction {
  readonly type: typeof SET_MODE;
  readonly payload: string;
}

export const flushState = () => ({
  type: FLUSH_STATE,
});

export const updateOrdersPending = () => ({
  type: UPDATE_ORDERS_PENDING,
});

export const updateOrdersSuccess = () => ({
  type: UPDATE_ORDERS_SUCCESS,
});

export const calculateOrders = (allIngredients: any, ordersApiResponse: any, mode: string) => (dispatch: AppDispatch) => {
  dispatch(updateOrdersPending());

  const readyOrders = ordersApiResponse.orders
    .filter((order: any) => order.status === "done")
    .map((order: any) => order.number);

  const inProgressOrders = ordersApiResponse.orders
    .filter((order: any) => order.status === "pending")
    .map((order: any) => order.number);

  const orders = ordersApiResponse.orders.map((order: any) => {
    const ingredientsCalculated = order.ingredients.map((ingredientId: any) => {
      const ingredient = allIngredients.find(
        (item: any) => item._id === ingredientId
      );

      if (!ingredient) {
        return {
          _id: "",
          name: "NAME",
          image: "",
          price: 10,
        };
      }

      return {
        _id: ingredient._id,
        name: ingredient.name,
        image: ingredient.image,
        price: ingredient.price,
      };
    });

    return {
      ...order,
      ingredients: ingredientsCalculated,
      price: ingredientsCalculated.reduce((acc: any, item: any) => acc + item.price, 0),
    };
  });

  dispatch(
    setOrders({
      readyOrders,
      inProgressOrders,
      orders,
      total: ordersApiResponse.total,
      totalToday: ordersApiResponse.totalToday,
    })
  );

  // dispatch(
  //   updateOrdersSuccess()
  // );

  dispatch(setMode(mode));
}

export const setOrders = (orders: IOrdersParsed) => ({
  type: SET_ORDERS,
  payload: orders,
});

export const setMode = (mode: string) => ({
  type: SET_MODE,
  payload: mode,
});

// export const updateOrders =
//   (ordersResponse: IOrdersResponse) => (dispatch: AppDispatch) => {
//     //dispatch(updateOrdersPending());

//     // const readyOrders = ordersResponse.orders
//     //   .filter((order) => order.status === "done")
//     //   .map((order) => order.number);

//     // const inProgressOrders = ordersResponse.orders
//     //   .filter((order) => order.status === "pending")
//     //   .map((order) => order.number);

//     // const ingredients = getAllIngredients(state);

//     // const orders = ordersResponse.orders.map((order) => {
//     //   const ingredientsCalculated = order.ingredients.map((ingredientId) => {
//     //     const ingredient = ingredients.find(
//     //       (item: Ingredient) => item._id === ingredientId
//     //     );

//     //     if (!ingredient) {
//     //       return {
//     //         _id: "",
//     //         name: "NAME",
//     //         image: "",
//     //         price:  10,
//     //       };
//     //     }

//     //     return {
//     //       _id: ingredient._id,
//     //       name: ingredient.name,
//     //       image: ingredient.image_mobile,
//     //       price: ingredient.price,
//     //     };
//     //   });

//     //   return {
//     //     ...order,
//     //     ingredients: ingredientsCalculated,
//     //     price: ingredientsCalculated.reduce((acc, item) => acc + item.price, 0),
//     //   };
//     // });

//     // dispatch(
//     //   setOrders({
//     //     readyOrders,
//     //     inProgressOrders,
//     //     orders,
//     //     total: ordersResponse.total,
//     //     totalToday: ordersResponse.totalToday,
//     //   })
//     // );

//     dispatch(updateOrdersSuccess());
//   };

// export const updateOrders = (
//   ordersResponse: IOrdersResponse
// ): IUpdateOrdersAction => () => {
//   return {
//     type: UPDATE_ORDERS,
//     payload: ordersResponse,
//   };
// };

export const updateOrders = {type: UPDATE_ORDERS};

export type TOrdersFeedActions =
  | IUpdateOrdersAction
  | IUpdateOrdersPendingAction
  | IUpdateOrdersSuccessAction
  | ISetOrdersAction
  | IFlushStateAction
  | ISetModeAction;
