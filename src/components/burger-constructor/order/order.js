import styles from "./order.module.css";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import ModalWindow from "../../modal-window/modal-window";
import OrderDetails from "../../order-details/order-details";
import { useDispatch, useSelector } from "react-redux";
import { getTotalPrice } from "../../../services/burger-constructor/selectors";
import { getSelectedIngredients } from "../../../services/burger-constructor/selectors.js";
import { placeOrder } from "../../../services/order/actions";
import { cleanupConstructorState } from "../../../services/burger-constructor/actions";
import { resetOrder } from "../../../services/order/actions";

export const Order = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const totalPrice = useSelector(getTotalPrice);
  const ingredients = useSelector(getSelectedIngredients);
  
  const dispatch = useDispatch();

  const onOpenOrder = () => {
    setIsModalOpen(true);

    dispatch(placeOrder(ingredients));
  };

  const onCloseOrder = () => {
    setIsModalOpen(false);

    dispatch(cleanupConstructorState());
    dispatch(resetOrder());
  };

  return (
    <div>
      <div className={styles.buttonBox}>
        <div className={styles.currency}>
          {totalPrice}&nbsp;
          <CurrencyIcon />
        </div>

        <div onClick={onOpenOrder}>
          <Button htmlType="button">Оформить заказ</Button>
        </div>

        <ModalWindow isOpen={isModalOpen} onClose={onCloseOrder}>
          <OrderDetails />
        </ModalWindow>
      </div>
    </div>
  );
};
