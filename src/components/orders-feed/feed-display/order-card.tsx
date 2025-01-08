import styles from "./feed-display.module.css";
import { TOrderCalculated } from "../../../services/orders-feed/reducer";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink, useLocation } from "react-router-dom";
import { getHumanReadableDate } from "../../../utils/date-utils";

interface IOrderCard {
  order: TOrderCalculated;
}

const OrderCard = ({ order }: IOrderCard): JSX.Element => {
  const location = useLocation();

  return (
    <NavLink
      to={`/orders/${order._id}`}
      state={{ backgroundLocation: location }}
      className={styles.orderItem}
    >
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <div className={styles.number}>#{order.number}</div>
          <div className={styles.date}>
            {getHumanReadableDate(order.createdAt)}
          </div>
        </div>

        <div className={styles.orderName}>{order.name}</div>

        <div className={styles.orderContents}>
          <div className={styles.imageContainer}>
            {order.ingredients.map((ingredient, index) => (
              <div key={index} className={styles.imageWrapper}>
                <img src={ingredient.image} alt={ingredient.name} />
              </div>
            ))}
          </div>
          <div className={styles.price}>
            {order.price}&nbsp;
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default OrderCard;
