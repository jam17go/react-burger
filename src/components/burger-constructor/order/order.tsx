import styles from "./order.module.css";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import ModalWindow from "../../modal-window/modal-window";
import OrderDetails from "../../order-details/order-details";
import { useSelector } from "../../../services/hooks";
import { useDispatch } from "../../../services/hooks";
import { getTotalPrice } from "../../../services/burger-constructor/selectors";
import { getSelectedIngredients } from "../../../services/burger-constructor/selectors";
import { placeOrder } from "../../../services/order/actions";
import { cleanupConstructorState } from "../../../services/burger-constructor/actions";
import { resetOrder } from "../../../services/order/actions";
import { useNavigate } from "react-router";

export const Order = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const totalPrice = useSelector(getTotalPrice);
  const ingredients = useSelector(getSelectedIngredients);
  // @ts-ignore
  const user = useSelector((store) => store.user.user);
  const navigate = useNavigate();
  
  const dispatch = useDispatch();

  const onOpenOrder = () => {
    if (!user) {
      navigate("/login", { state: { from: "/" } });
    } else {
      setIsModalOpen(true);
      // @ts-ignore
      dispatch(placeOrder(ingredients));
    }
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
          <CurrencyIcon type="primary"/>
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
