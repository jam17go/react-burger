import AppHeader from "../app-header/app-header.js";
import BurgerIngredients from "../burger-ingredients/burger-ingredients.js";
import BurgerConstructor from "../burger-constructor/burger-constructor.js";
import styles from "./app.module.css";
import { useState, useEffect } from "react";
import { ingredientsSelected, bunSelected } from "../../utils/data";
import axios from "axios";

function useIngredientGroups() {
  const [ingredientGroups, setIngredientGroups] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProductData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          "https://norma.nomoreparties.space/api/ingredients"
        );
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

function App() {
  const { ingredientGroups, loading, error } = useIngredientGroups();

  return (
    <div className={styles.wrapper}>
      <AppHeader />
      <div className={styles.main}>
        {loading ? (
          <div className={styles.loading}>Загрузка...</div>
        ) : error ? (
          <div className={styles.error}>Ошибка загрузки данных</div>
        ) : ingredientGroups ? (
          <>
            <BurgerIngredients ingredientGroups={ingredientGroups} />
            <BurgerConstructor
              ingredientsSelected={ingredientsSelected}
              bunSelected={bunSelected}
            />
          </>
        ) : null}
      </div>
    </div>
  );
}

export default App;
