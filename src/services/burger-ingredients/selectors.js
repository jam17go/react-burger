export const getIngredientGroups = (state) => {
  return {
    ingredientGroups: state.burgerIngredients.ingredientGroups,
    loading: state.burgerIngredients.loading,
    error: state.burgerIngredients.error,
  };
};
