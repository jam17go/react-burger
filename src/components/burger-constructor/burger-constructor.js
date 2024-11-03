import styles from "./burger-constructor.module.css";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import ModalWindow from "../modal-window/modal-window";
import OrderDetails from "../order-details/order-details";
import PropTypes from "prop-types";
import { ingredientItemPropType } from "../../types/prop-types";
import { useDispatch, useSelector } from "react-redux";
import { removeIngredient } from "../../services/burger-constructor/actions";
import { getTotalPrice } from "../../services/burger-constructor/selectors";
import { getOrderIngredientsList } from "../../services/burger-constructor/selectors";

const BurgerConstructor = ({ ingredientsSelected, bunSelected }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalPrice = useSelector(getTotalPrice);

  const orderIngredientsList = useSelector(getOrderIngredientsList);  

  const dispatch = useDispatch();

  const handleRemoveIngredient = (ingredient) => () => {
    dispatch(removeIngredient(ingredient));
  }

  if (!ingredientsSelected.length && !bunSelected) {
    return (
      <div className={styles.section}>
        <div className={styles.listContainer}>
          <div className={styles.emptyList}>
            <p>Добавьте ингредиенты</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.section}>
      <div className={styles.listContainer}>
        <div className={styles.bunElement}>
          {bunSelected && (
            <ConstructorElement
              type="top"
              isLocked={true}
              text={bunSelected.name}
              price={bunSelected.price}
              thumbnail={bunSelected.image}
            />
          )}
        </div>

        <div className={styles.list}>
          {ingredientsSelected.map((ingredient, index) => (
            <div className={styles.item} key={index}>
              <DragIcon />
              <ConstructorElement
                text={ingredient.name}
                price={ingredient.price}
                thumbnail={ingredient.image}
                handleClose={handleRemoveIngredient(ingredient)}
              />
            </div>
          ))}
        </div>

        <div className={styles.bunElement}>
          {bunSelected && (
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={bunSelected.name}
              price={bunSelected.price}
              thumbnail={bunSelected.image}
            />
          )}
        </div>

        <div>
          <div className={styles.buttonBox}>
            <div className={styles.currency}>
              { totalPrice }&nbsp;
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

BurgerConstructor.propTypes = {
  ingredientsSelected: PropTypes.arrayOf(ingredientItemPropType),
  bunSelected: PropTypes.shape({
    ingredientItemPropType,
  }),
};

export default BurgerConstructor;
