import { SET_AUTH_CHECKED, SET_USER, SET_LOGIN_ERROR } from './actions';
import { TUserActions } from './actions';

type TUserState = {
  user: null | any,
  isAuthChecked: boolean,
  loginError: null | any
};

export const initialState = {
    user: null,
    isAuthChecked: false,
    loginError: null
};

export const reducer = (state = initialState, action: TUserActions): TUserState => {
  switch (action.type) {
    case SET_AUTH_CHECKED:
      return {
        ...state,
        isAuthChecked: action.payload
      }
    case SET_USER:
      return {
        ...state,
        user: action.payload
      }
    case SET_LOGIN_ERROR:
      return {
        ...state,
        loginError: action.payload
      }
    default:
      return state;    
  }
};
