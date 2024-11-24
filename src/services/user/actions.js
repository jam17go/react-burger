import {
  loginRequest,
  logoutRequest,
  getUserRequest,
} from "../../utils/stellar-burger-api";

export const SET_AUTH_CHECKED = "SET_AUTH_CHECKED";
export const SET_USER = "SET_USER";

export const setAuthChecked = (value) => ({
  type: SET_AUTH_CHECKED,
  payload: value,
});

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const login = (email, password) => {
  return async (dispatch) => {
    return loginRequest(email, password).then((res) => {
      dispatch(setUser(res.user));
      dispatch(setAuthChecked(true));
    });
  };
};

export const checkUserAuth = () => {
  return (dispatch) => {
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
  return (dispatch) => {
    return logoutRequest().then(() => {
      dispatch(setUser(null));
    });
  };
};
