import styles from "./feed-display.module.css";
import OrderCard from "./order-card";
import { useSelector } from "../../../services/hooks";
import { getOrders } from "../../../services/orders-feed/selectors";

const FeedDisplay = (): JSX.Element => {
  const orders = useSelector(getOrders);

  return (
    <div className={styles.section}>
      <div className={styles.groeups}>
        {orders.map((item, index) => (
          <div key={index} className={styles.order}>
            <OrderCard order={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedDisplay;
