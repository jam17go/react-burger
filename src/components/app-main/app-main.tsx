import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import styles from "./app-main.module.css";
import AppMainLoader from "./app-main-loader";

export function AppMain(): JSX.Element {
  return (
    <div className={styles.main}>
      <AppMainLoader>
        <BurgerIngredients />
        <BurgerConstructor />
      </AppMainLoader>
    </div>
  );
}