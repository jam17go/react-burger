import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension";
import { reducer as ingredientsReducer } from "./burger-ingredients/reducer";
import { thunk } from "redux-thunk";
import { reducer as constructorReducer } from "./burger-constructor/reducer";
import { reducer as orderReducer } from "./order/reducer";
import { reducer as ingredientDetailsReducer } from "./ingredient-details/reducer";

const rootReducer = combineReducers({
    burgerIngredients: ingredientsReducer,
    burgerConstructor: constructorReducer,
    order: orderReducer,
    ingredientDetails: ingredientDetailsReducer,
})

export const configureStore = () => {
    return createStore(
        rootReducer,
        composeWithDevToolsDevelopmentOnly(applyMiddleware(thunk)),
    );
};
