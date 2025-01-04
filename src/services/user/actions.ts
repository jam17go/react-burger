import {
  loginRequest,
  logoutRequest,
  getUserRequest,
} from "../../utils/stellar-burger-api";
import { AppDispatch } from "../hooks";

export const SET_AUTH_CHECKED = "SET_AUTH_CHECKED";
export const SET_USER = "SET_USER";
export const SET_LOGIN_ERROR = "SET_LOGIN_ERROR";

export const setAuthChecked = (value: boolean) => ({
  type: SET_AUTH_CHECKED,
  payload: value,
});

export const setUser = (user: any) => ({
  type: SET_USER,
  payload: user,
});

export const login = (email: string, password: string) => {
  return async (dispatch: AppDispatch) => {
    return loginRequest(email, password)
      .then((res) => {
        dispatch(setUser(res.user));
        dispatch(setAuthChecked(true));
        dispatch({
            type: SET_LOGIN_ERROR,
            payload: null,
          });
      })
      .catch((err) => {
        dispatch({
          type: SET_LOGIN_ERROR,
          payload: err.message,
        });
        dispatch(setAuthChecked(true));
      });
  };
};

export const checkUserAuth = () => {
  return (dispatch: AppDispatch) => {
    if (localStorage.getItem("accessToken")) {
      getUserRequest()
        .then((res) => dispatch(setUser(res.user)))
        .finally(() => dispatch(setAuthChecked(true)));
    } else {
      dispatch(setAuthChecked(true));
    }
  };
};

export const logout = () => {
  return async (dispatch: AppDispatch) => {
    return logoutRequest().then(() => {
      dispatch(setUser(null));
    });
  };
};

export type TUserActions = any;
