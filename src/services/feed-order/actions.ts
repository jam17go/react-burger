import { getOrder } from "../../utils/stellar-burger-api";
import { AppDispatch } from "../hooks";

export const LOAD_ORDER_SUCCESS = "LOAD_ORDER_SUCCESS";
export const ORDER_LOADING = "ORDER_LOADING";
export const ORDER_ERROR = "ORDER_ERROR";

export const loadOrder = (orderNumber: string, allIngredients: any) => (dispatch: AppDispatch) => {
  dispatch({ type: ORDER_LOADING });

  getOrder(orderNumber)
    .then((data) => {
        const ingredients = data.orders[0].ingredients.map((id: string) => {
            return allIngredients.find((item: any) => item._id === id);
        });
        const orderPrice = ingredients.reduce((acc: number, item: any) => acc + item.price, 0);
      dispatch({
        type: LOAD_ORDER_SUCCESS,
        payload: {
            ...data.orders[0],
            ingredients: ingredients,
            price: orderPrice,
        },
      });
    })
    .catch(() => {
      dispatch({ type: ORDER_ERROR });
    });
};

export type TFeedOrder = any;
