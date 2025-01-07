import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension";
import { reducer as ingredientsReducer } from "./burger-ingredients/reducer";
import { thunk } from "redux-thunk";
import { reducer as constructorReducer } from "./burger-constructor/reducer";
import { reducer as orderReducer } from "./order/reducer";
import { reducer as ingredientDetailsReducer } from "./ingredient-details/reducer";
import { reducer as authenticationReducer } from "./password-reset/reducer";
import { reducer as loginReducer } from "./login/reducer";
import { reducer as userReducer } from "./user/reducer";
import { TIngredientDetailsActions } from "./ingredient-details/actions";
import { TBurgerConstructorActions } from "./burger-constructor/actions";
import { TOrderActions } from "./order/actions";
import { TLoginActions } from "./login/actions";
import { TUserActions } from "./user/actions";
import { ThunkAction } from "redux-thunk";
import { Action, ActionCreator } from "redux";
import { reducer as ordersFeedReducer } from "./orders-feed/reducer";
import { socketMiddleware } from "./middleware/websocket-middleware";
import {
  WS_SEND_MESSAGE,
  WS_GET_MESSAGE,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
} from "./middleware/actions";

import { UPDATE_ORDERS } from "./orders-feed/actions";

export const rootReducer = combineReducers({
  burgerIngredients: ingredientsReducer,
  burgerConstructor: constructorReducer,
  order: orderReducer,
  ingredientDetails: ingredientDetailsReducer,
  authenticationReducer: authenticationReducer,
  loginReducer: loginReducer,
  user: userReducer,
  ordersFeed: ordersFeedReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type TApplicationActions =
  | TIngredientDetailsActions
  | TBurgerConstructorActions
  | TOrderActions
  | TIngredientDetailsActions
  | TLoginActions
  | TUserActions;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;

const wsUrl = "wss://norma.nomoreparties.space/orders/all";

const wsActions = {
  wsInit: WS_CONNECTION_START,
  wsSendMessage: WS_SEND_MESSAGE,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: UPDATE_ORDERS,
};

export const store = createStore(
  rootReducer,
  composeWithDevToolsDevelopmentOnly(
    applyMiddleware(thunk, socketMiddleware(wsUrl, wsActions))
  ) as any
);

export const configureStore = () => {
  return store;
};
