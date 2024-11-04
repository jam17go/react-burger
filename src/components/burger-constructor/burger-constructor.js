import styles from "./burger-constructor.module.css";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useRef } from "react";
import ModalWindow from "../modal-window/modal-window";
import OrderDetails from "../order-details/order-details";
import { useDispatch, useSelector } from "react-redux";
import {
  addIngredient,
  removeIngredient,
} from "../../services/burger-constructor/actions";
import { getTotalPrice } from "../../services/burger-constructor/selectors";
import { getOrderIngredientsList } from "../../services/burger-constructor/selectors";
import { useDrop, useDrag } from "react-dnd";
import { getSelectedIngredients } from "../../services/burger-constructor/selectors.js";
import { DraggableIngredient } from "./draggable-ingredient/draggable-ingredient";
import { placeOrder } from "../../services/order/actions";
import { cleanupConstructorState } from "../../services/burger-constructor/actions";
import { resetOrder } from "../../services/order/actions";

const BurgerConstructor = () => {
  const { ingredients, bun } = useSelector(getSelectedIngredients);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalPrice = useSelector(getTotalPrice);

  const dispatch = useDispatch();

  const [, dropRef] = useDrop({
    accept: "ingredient",
    drop(item) {
      dispatch(addIngredient(item));
    },
  });

  const onOpenOrder = () => {
    setIsModalOpen(true);

    dispatch(placeOrder(ingredients));
  }

  const onCloseOrder = () => {
    setIsModalOpen(false);

    dispatch(cleanupConstructorState());
    dispatch(resetOrder());
  }

  return (
    <div ref={dropRef} className={styles.section}>
      <div className={styles.listContainer}>
        {!bun && (
          <div className={styles.emptyBun}>
            <div>Перетащи булку сюда</div>
          </div>
        )}

        {bun && (
          <div className={styles.bunElement}>
            <ConstructorElement
              type="top"
              isLocked={true}
              text={bun.name}
              price={bun.price}
              thumbnail={bun.image}
            />
          </div>
        )}

        {!ingredients.length && (
          <div className={styles.emptyList}>
            <div>Перетащи ингредиенты сюда</div>
          </div>
        )}

        {ingredients.length > 0 && (
          <div className={styles.list}>
            {ingredients.map((ingredient, index) => (
              <DraggableIngredient
                ingredient={ingredient}
                index={index}
                key={ingredient.listId}
              />
            ))}
          </div>
        )}

        {!bun && (
          <div className={styles.emptyBun}>
            <div>Перетащи булку сюда</div>
          </div>
        )}

        {bun && (
          <div className={styles.bunElement}>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={bun.name}
              price={bun.price}
              thumbnail={bun.image}
            />
          </div>
        )}

        <div>
          <div className={styles.buttonBox}>
            <div className={styles.currency}>
              {totalPrice}&nbsp;
              <CurrencyIcon />
            </div>

            <div onClick={onOpenOrder}>
              <Button htmlType="button">Оформить заказ</Button>
            </div>

            <ModalWindow
              isOpen={isModalOpen}
              onClose={onCloseOrder}
            >
              <OrderDetails/>
            </ModalWindow>
          </div>
        </div>
      </div>
    </div>
  );
};

BurgerConstructor.propTypes = {};

export default BurgerConstructor;
