import {
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  UPDATE_USER_PENDING,
} from "./actions";
import { TProfileActions } from "./actions";

type TProfileState = {
  user: any,
  loading: boolean,
  error: null | any,
};

export const initialState = {
  user: {},
  loading: false,
  error: null,
};

export const reducer = (state = initialState, action:TProfileActions): TProfileState => {
  switch (action.type) {
    case UPDATE_USER_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case UPDATE_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
