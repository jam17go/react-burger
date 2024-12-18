import { registerRequest } from "../../utils/stellar-burger-api";

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_ERROR = "REGISTER_ERROR";
export const REGISTER_PENDING = "REGISTER_PENDING";

export const register = (email, password, name) => (dispatch) => {
  dispatch({
    type: REGISTER_PENDING,
  });

  registerRequest(email, password, name)
    .then(() => {
      dispatch({
        type: REGISTER_SUCCESS,
      });
    })
    .catch(() => {
      dispatch({
        type: REGISTER_ERROR,
      });
    });
};
