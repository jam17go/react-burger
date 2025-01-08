export const getIngredientGroupsData = (state) => state.burgerIngredients.ingredientGroups;
export const getLoadingStatus = (state) => state.burgerIngredients.loading;
export const getErrorStatus = (state) => state.burgerIngredients.error;
export const getAllIngredients = (state) => {
    return state.burgerIngredients.ingredientGroups.reduce((acc, group) => {
        return [...acc, ...group.ingredients];
    }, []);
};