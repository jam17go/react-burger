import { ENDPOINTS } from "../config/api";

const getResponse = (res) => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Ошибка ${res.status}`);
};

export const getBurgerIngredients = () => {
  return fetch(ENDPOINTS.INGREDIENTS).then(getResponse);
};

export const postOrder = (ingredients) => {
  return fetch(ENDPOINTS.ORDERS, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ingredients: ingredients
    }),
  }).then(getResponse);
};
