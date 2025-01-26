import styles from "./burger-constructor.module.css";
import { addIngredient } from "../../services/burger-constructor/actions";
import { useDrop } from "react-dnd";
import { Ingredients } from "./ingredients/ingredients";
import { Order } from "./order/order";
import { Buns } from "./buns/buns";
import { useDispatch } from "../../services/hooks";
import { IIngredient } from "../../services/burger-constructor/actions";

const BurgerConstructor = (): JSX.Element => {
  const dispatch = useDispatch();

  const [, dropRef] = useDrop({
    accept: "ingredient",
    drop(item: IIngredient) {
      dispatch(addIngredient(item));
    },
  });

  return (
    <div data-testid='drop-container' ref={dropRef} className={styles.section}>
      <div className={styles.listContainer}>
        <Buns>
          <Ingredients />
        </Buns>
        <Order />
      </div>
    </div>
  );
};

export default BurgerConstructor;
