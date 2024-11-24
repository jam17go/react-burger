import BurgerIngredients from "../burger-ingredients/burger-ingredients.js";
import BurgerConstructor from "../burger-constructor/burger-constructor.js";
import styles from "./app-main.module.css";
import AppMainLoader from "../app-main/app-main-loader.js";

export function AppMain() {
  return (
    <div className={styles.main}>
      <AppMainLoader>
        <BurgerIngredients />
        <BurgerConstructor />
      </AppMainLoader>
    </div>
  );
}