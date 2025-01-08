import styles from "./feed-display.module.css";
import { TOrderCalculated } from "../../../services/orders-feed/reducer";
import {
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ru";

// Extend dayjs with the relativeTime plugin
dayjs.extend(relativeTime);
dayjs.locale("ru");

const isToday = (date: dayjs.Dayjs): boolean => {
  const now = dayjs();
  return date.isSame(now, "day");
};

const getHumanReadableDate = (isoDate: string): string => {
  const date = dayjs(isoDate);

  if (isToday(date)) {
    return `сегодня, ${date.format("HH:mm")}`;
  } else {
    return `${date.fromNow()}, ${date.format("HH:mm")}`;
  }
};

interface IOrderCard {
  order: TOrderCalculated;
}

const OrderCard = ({ order }: IOrderCard): JSX.Element => {
  return (
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
  );
};

export default OrderCard;
