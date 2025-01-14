import { RootState } from "../store";

export const getIngredientGroupsData = (state: RootState) => state.burgerIngredients.ingredientGroups;
export const getLoadingStatus = (state: RootState) => state.burgerIngredients.loading;
export const getErrorStatus = (state: RootState) => state.burgerIngredients.error;
export const getAllIngredients = (state: RootState) => {
    return state.burgerIngredients.ingredientGroups.reduce((acc, group) => {
        return [...acc, ...group.ingredients];
    }, []);
};