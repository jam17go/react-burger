import {
  passwordResetRequest,
  passwordResetResetRequest,
} from "../../utils/stellar-burger-api";

export const PASSWORD_RESET_SUCCESS = "PASSWORD_RESET_SUCCESS";
export const PASSWORD_RESET_ERROR = "PASSWORD_RESET_ERROR";
export const PASSWORD_RESET_PENDING = "PASSWORD_RESET_PENDING";
export const PASSWORD_RESET_FLAG = "PASSWORD_RESET_FLAG";

export const PASSWORD_RESET_RESET_SUCCESS = "PASSWORD_RESET_RESET_SUCCESS";
export const PASSWORD_RESET_RESET_ERROR = "PASSWORD_RESET_RESET_ERROR";
export const PASSWORD_RESET_RESET_PENDING = "PASSWORD_RESET_RESET_PENDING";

export const passwordReset = (email) => (dispatch) => {
  dispatch({
    type: PASSWORD_RESET_PENDING,
  });

  dispatch({
    type: PASSWORD_RESET_FLAG,
  });

  passwordResetRequest(email)
    .then(() => {
      dispatch({
        type: PASSWORD_RESET_SUCCESS,
      });
    })
    .catch(() => {
      dispatch({
        type: PASSWORD_RESET_ERROR,
      });
    });
};
export const passwordResetReset = (password, token) => (dispatch) => {
  dispatch({
    type: PASSWORD_RESET_RESET_PENDING,
  });

  passwordResetResetRequest(password, token)
    .then(() => {
      dispatch({
        type: PASSWORD_RESET_RESET_SUCCESS,
      });
    })
    .catch(() => {
      dispatch({
        type: PASSWORD_RESET_RESET_ERROR,
      });
    });
};
