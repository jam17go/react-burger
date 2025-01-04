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
import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';

export const rootReducer = combineReducers({
  burgerIngredients: ingredientsReducer,
  burgerConstructor: constructorReducer,
  order: orderReducer,
  ingredientDetails: ingredientDetailsReducer,
  authenticationReducer: authenticationReducer,
  loginReducer: loginReducer,
  user: userReducer,
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

export const store = createStore(
  rootReducer,
  composeWithDevToolsDevelopmentOnly(applyMiddleware(thunk)) as any
);

export const configureStore = () => {
  return store;
};
