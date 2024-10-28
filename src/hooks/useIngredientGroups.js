import { useState, useEffect } from "react";
import axios from "axios";
import { ENDPOINTS } from "../config/api";

function useIngredientGroups() {
  const [ingredientGroups, setIngredientGroups] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProductData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(ENDPOINTS.INGREDIENTS);
        const data = response.data.data;

        const ingredientGroups = [
          {
            groupName: "Булки",
            ingredients: data.filter((ingredient) => ingredient.type === "bun"),
          },
          {
            groupName: "Соусы",
            ingredients: data.filter(
              (ingredient) => ingredient.type === "sauce"
            ),
          },
          {
            groupName: "Начинки",
            ingredients: data.filter(
              (ingredient) => ingredient.type === "main"
            ),
          },
        ];
        setIngredientGroups(ingredientGroups);
        setLoading(false);
        setError(null);
      } catch (error) {
        console.log(error);

        setIngredientGroups(undefined);
        setLoading(false);
        setError(error);
      }
    };

    getProductData();
  }, []);

  return { ingredientGroups, loading, error };
}

export default useIngredientGroups;
