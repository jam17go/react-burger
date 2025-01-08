import { useParams } from "react-router";
import { useSelector } from "../../../services/hooks";
import { getOrders } from "../../../services/orders-feed/selectors";
import { getHumanReadableDate } from "../../../utils/date-utils";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./feed-display.module.css";

export function Order(): JSX.Element {
  const { id } = useParams();
  const orders = useSelector(getOrders);
  const order = orders.find((order) => order._id === id);

  if (!order) {
    return <>Заказ не найден</>;
  }

  return (
    <div className={styles.orderContainer}>
      <div className={styles.number}>#{order.number}</div>
      <div className={styles.orderName}>{order.name}</div>
      <div className={styles.orderIngredients}>
        {order.ingredients.map((ingredient, index) => (
          <div key={index} className={styles.ingredientDetails}>
            <img src={ingredient.image} alt={ingredient.name} />
            <div className={styles.ingredientName}>{ingredient.name}</div>
            <div className={styles.ingredientPrice}>
              {ingredient.price}&nbsp;
              <CurrencyIcon type="primary" />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.orderFooter}>
        <div className={styles.date}>
          {getHumanReadableDate(order.createdAt)}
        </div>
        <div className={styles.price}>
          {order.price}&nbsp;
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
}
