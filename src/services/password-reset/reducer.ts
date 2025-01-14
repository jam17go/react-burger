import {
  PASSWORD_RESET_PENDING,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_ERROR,
  PASSWORD_RESET_FLAG,
  PASSWORD_RESET_RESET_SUCCESS,
  PASSWORD_RESET_RESET_PENDING,
  PASSWORD_RESET_RESET_ERROR,
} from "./actions";
import { TPasswordResetActions } from "./actions";

type TPasswordResetState = {
  loading: boolean;
  success: boolean;
  error: boolean;
  passwordResetFlag: boolean;
};

export const initialState = {
  loading: false,
  success: false,
  error: false,
  passwordResetFlag: false,
};

export const reducer = (state = initialState, action: TPasswordResetActions): TPasswordResetState => {
  switch (action.type) {
    case PASSWORD_RESET_PENDING:
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
      };
    case PASSWORD_RESET_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
      };
    case PASSWORD_RESET_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
      };
    case PASSWORD_RESET_FLAG:
      return {
        ...state,
        passwordResetFlag: true,
      };
    case PASSWORD_RESET_RESET_PENDING:
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
      };
    case PASSWORD_RESET_RESET_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
      };
    case PASSWORD_RESET_RESET_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
      };
    default:
      return state;
  }
};
