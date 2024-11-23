import BurgerIngredients from "../components/burger-ingredients/burger-ingredients.js";
import BurgerConstructor from "../components/burger-constructor/burger-constructor.js";
import styles from "./home-page.module.css";
import AppMain from "../components/app-main/app-main.js";

export function HomePage() {
  return (
    <div className={styles.main}>
      <AppMain>
        <BurgerIngredients />
        <BurgerConstructor />
      </AppMain>
    </div>
  );
}
