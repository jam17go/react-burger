import AppHeader from "../app-header/app-header.js";
import BurgerIngredients from "../burger-ingredients/burger-ingredients.js";
import BurgerConstructor from "../burger-constructor/burger-constructor.js";
import styles from "./app.module.css";
import AppMain from "../app-main/app-main.js";
import { loadIngredients } from "../../services/burger-ingredients/actions.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadIngredients());
  }, []);

  return (
    <div className={styles.wrapper}>
      <AppHeader />
      <DndProvider backend={HTML5Backend}>
        <div className={styles.main}>
          <AppMain>
            <BurgerIngredients/>
            <BurgerConstructor/>
          </AppMain>
        </div>
      </DndProvider>
    </div>
  );
}

export default App;
