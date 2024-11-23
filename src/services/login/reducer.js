import { LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_PENDING } from "./actions";

const initialState = {
  success: false,
  error: false,
  pending: false,
  user: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        success: true,
        error: false,
        pending: false,
        user: action.payload,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        success: false,
        error: true,
        pending: false,
        user: null,
      };
    case LOGIN_PENDING:
      return {
        ...state,
        success: false,
        error: false,
        pending: true,
        user: null,
      };
    default:
      return state;
  }
};
