import AppHeader from "../app-header/app-header.js";
import BurgerIngredients from "../burger-ingredients/burger-ingredients.js";
import BurgerConstructor from "../burger-constructor/burger-constructor.js";
import styles from "./app.module.css";
import AppMain from "../app-main/app-main.js";
import { useSelector } from "react-redux";
import { getIngredientGroups } from "../../services/burger-ingredients/selectors.js";
import { getSelectedIngredients } from "../../services/burger-constructor/selectors.js";
import { loadIngredients } from "../../services/burger-ingredients/actions.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const { ingredientGroups, loading, error } = useSelector(getIngredientGroups);
  const { ingredients, bun } = useSelector(getSelectedIngredients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadIngredients());
  }, []);

  return (
    <div className={styles.wrapper}>
      <AppHeader />
      <div className={styles.main}>
        <AppMain loading={loading} error={error}>
          <BurgerIngredients ingredientGroups={ingredientGroups} />
          <BurgerConstructor
            ingredientsSelected={ingredients}
            bunSelected={bun}
          />
        </AppMain>
      </div>
    </div>
  );
}

export default App;
