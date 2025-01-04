import { postOrder } from "../../utils/stellar-burger-api";
import { IIngredient } from "../burger-constructor/actions";
import { AppDispatch } from "../hooks";

export const PLACE_ORDER_SUCCESS = "PLACE_ORDER_SUCCESS";
export const PLACE_ORDER_ERROR = "PLACE_ORDER_ERROR";
export const PLACE_ORDER_PENDING = "PLACE_ORDER_PENDING";
export const PLACE_ORDER_RESET = "PLACE_ORDER_RESET";

export const placeOrder = (ingredients: IIngredient[]) => (dispatch: AppDispatch) => {
  dispatch({
    type: PLACE_ORDER_PENDING,
  });

  postOrder(ingredients)
    .then((order) => {
      dispatch({
        type: PLACE_ORDER_SUCCESS,
        payload: order,
      });
    })
    .catch(() => {
      dispatch({
        type: PLACE_ORDER_ERROR,
        payload: null,
      });
    });
};

export const resetOrder = () => ({
  type: PLACE_ORDER_RESET,
});

export type TOrderActions = any;
