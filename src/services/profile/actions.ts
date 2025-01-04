import { updateUserInfoRequest } from "../../utils/stellar-burger-api";
import { AppDispatch } from "../hooks";

export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_ERROR = "UPDATE_USER_ERROR";
export const UPDATE_USER_PENDING = "UPDATE_USER_PENDING";

export const updateUser = (usernameValue: string, emailValue: string, passwordValue: string) => async (dispatch: AppDispatch) => {
  dispatch({ type: UPDATE_USER_PENDING });
  try {
    const user = await updateUserInfoRequest(usernameValue, emailValue, passwordValue);
    dispatch({ type: UPDATE_USER_SUCCESS, payload: user });
  } catch (error) {
    dispatch({ type: UPDATE_USER_ERROR, payload: error });
  }
};

export type TProfileActions = any;
