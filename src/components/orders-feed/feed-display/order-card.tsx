import styles from "./feed-display.module.css";
import { TOrder } from "../../../services/orders-feed/reducer";

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
  order: TOrder;
}

const OrderCard = ({order}: IOrderCard): JSX.Element => {

  const price = 100

  return (
    <div className={styles.cardContent}>
      <div className={styles.cardHeader}>
        <div className={styles.number}>#{order.number}</div>
        <div className={styles.date}>{getHumanReadableDate(order.createdAt)}</div>
      </div>
      
      <div className={styles.orderName}>{order.name}</div>
      
      <div>
        {/* <div className={styles.orderPrice}>{ingredients}</div> */}
        <div className={styles.number}>{price}</div>
      </div>
    </div>
  );
};

export default OrderCard;
