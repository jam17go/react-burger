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

const BurgerConstructor = () => {
  const { ingredients, bun } = useSelector(getSelectedIngredients);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalPrice = useSelector(getTotalPrice);

  const orderIngredientsList = useSelector(getOrderIngredientsList);

  const dispatch = useDispatch();

  const [, dropRef] = useDrop({
    accept: "ingredient",
    drop(item) {
      dispatch(addIngredient(item));
    },
  });

  return (
    <div ref={dropRef} className={styles.section}>
      <div className={styles.listContainer}>
        <div className={styles.bunElement}>
          {bun && (
            <ConstructorElement
              type="top"
              isLocked={true}
              text={bun.name}
              price={bun.price}
              thumbnail={bun.image}
            />
          )}
        </div>

        <div className={styles.list}>
          {ingredients.map((ingredient, index) => (
            <DraggableIngredient
              ingredient={ingredient}
              index={index}
              key={ingredient.listId}
            />
          ))}
        </div>

        <div className={styles.bunElement}>
          {bun && (
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={bun.name}
              price={bun.price}
              thumbnail={bun.image}
            />
          )}
        </div>

        <div>
          <div className={styles.buttonBox}>
            <div className={styles.currency}>
              {totalPrice}&nbsp;
              <CurrencyIcon />
            </div>

            <div onClick={() => setIsModalOpen(true)}>
              <Button htmlType="button">Оформить заказ</Button>
            </div>

            <ModalWindow
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            >
              <OrderDetails ingredients={orderIngredientsList}></OrderDetails>
            </ModalWindow>
          </div>
        </div>
      </div>
    </div>
  );
};

BurgerConstructor.propTypes = {};

export default BurgerConstructor;
