import { RootState } from "../store";
import { TIngredient } from "./reducer";
import { getIngredientGroupsData, getAllIngredients } from "../burger-ingredients/selectors";
import { TOrderCalculated } from "./reducer";

export const getReadyOrders = (state: RootState) => {
  return state.ordersFeed.readyOrders;
};

export const getInProgressOrders = (state: RootState) => {
  return state.ordersFeed.inProgressOrders;
};

export const getTotalOrders = (state: RootState) => {
  return state.ordersFeed.totalOrders;
};

export const getTotalTodayOrders = (state: RootState) => {
  return state.ordersFeed.totalTodayOrders;
};

// export const getOrders = (state: RootState) => {
//   return state.ordersFeed.orders;
// };

export const getOrders = (state: RootState): TOrderCalculated[] => {
  //const ingredients = getIngredientGroupsData(state);
  const ingredients = getAllIngredients(state);
  
  const result = state.ordersFeed.orders.map((order) => {
    const ingredientsCalculated = order.ingredients.map((ingredientId) => {
      const ingredient = ingredients.find(
        (item: TIngredient) => item._id === ingredientId
      );

      if (!ingredient) {
        return {
          _id: "",
          name: "NAME",
          image: "",
          price: 0,
        };
      }

      return {
        _id: ingredient._id,
        name: ingredient.name,
        image: ingredient.image_mobile,
        price: ingredient.price,
      };
    });

    return {
      ...order,
      ingredients: ingredientsCalculated,
      price: ingredientsCalculated.reduce((acc, item) => acc + item.price, 0),
    };
  });

  return result;

  //   return state.ordersFeed.orders.map((order) => {
  //     const ingredientsCalculated = order.ingredients.map((ingredientId) => {
  //       const ingredient = ingredients.find(
  //         (item: TIngredient) => item._id === ingredientId
  //       );

  //       if (ingredient) {
  //         return {
  //           _id: ingredient._id,
  //           name: ingredient.name,
  //           image: ingredient.image,
  //           price: ingredient.price,
  //         };
  //       }
  //     });

  //     return {
  //       ...order,
  //       ingredients: ingredientsCalculated,
  //     };
  //   });
};
