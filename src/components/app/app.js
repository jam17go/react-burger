import AppHeader from "../app-header/app-header.js";
import BurgerIngredients from "../burger-ingredients/burger-ingredients.js";
import BurgerConstructor from "../burger-constructor/burger-constructor.js";
import styles from "./app.module.css";
import { ingredientsSelected, bunSelected } from "../../utils/data";
import AppMain from "../app-main/app-main.js";
import useIngredientGroups from "../../hooks/useIngredientGroups";

function App() {
  const { ingredientGroups, loading, error } = useIngredientGroups();

  return (
    <div className={styles.wrapper}>
      <AppHeader />
      <div className={styles.main}>
        <AppMain loading={loading} error={error}>
          <BurgerIngredients ingredientGroups={ingredientGroups} />
          <BurgerConstructor
            ingredientsSelected={ingredientsSelected}
            bunSelected={bunSelected}
          />
        </AppMain>
      </div>
    </div>
  );
}

export default App;
