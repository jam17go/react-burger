import { loginRequest } from "../../utils/stellar-burger-api";
import { AppDispatch } from "../hooks";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGIN_PENDING = "LOGIN_PENDING";

export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_ERROR = "LOGOUT_ERROR";
export const LOGOUT_PENDING = "LOGOUT_PENDING";

export const login = (email: string, password: string) => (dispatch: AppDispatch) => {
  dispatch({
    type: LOGIN_PENDING,
  });

  loginRequest(email, password)
    .then((user) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: user,
      });
    })
    .catch(() => {
      dispatch({
        type: LOGIN_ERROR,
        payload: null,
      });
    });
};

export const logout = () => (dispatch: AppDispatch) => {
  dispatch({
    type: LOGOUT_PENDING,
  });

  dispatch({
    type: LOGOUT_SUCCESS,
  });
};

export type TLoginActions = any;
