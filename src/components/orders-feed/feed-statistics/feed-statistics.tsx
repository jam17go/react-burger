import styles from "./feed-statistics.module.css";
import { useSelector } from "../../../services/hooks";
import {
  getReadyOrders,
  getInProgressOrders,
  getTotalOrders,
  getTotalTodayOrders,
} from "../../../services/orders-feed/selectors";

const FeedStatistics = (): JSX.Element => {
  const readyOrders = useSelector(getReadyOrders);
  const inProgressOrders = useSelector(getInProgressOrders);
  const totalOrders = useSelector(getTotalOrders);
  const totalTodayOrders = useSelector(getTotalTodayOrders);

  return (
    <div className={styles.section}>
      <div className={styles.statusContainer}>
        <div>
          <div className={styles.subHeader}>Готовы:</div>
          <div className={styles.groups}>
            {readyOrders.map((order, index) => (
              <div key={index} className={styles.order}>
                <div className={styles.numberReady}>{order}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className={styles.subHeader}>В работе:</div>
          <div className={styles.groups}>
            {inProgressOrders.map((order, index) => (
              <div key={index} className={styles.order}>
                <div className={styles.numberInProgress}>{order}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.totalTitle}>Выполнено за все время:</div>
      <div className={styles.total}>{totalOrders}</div>
      <div className={styles.totalTitle}>Выполнено за сегодня:</div>
      <div className={styles.total}>{totalTodayOrders}</div>
    </div>
  );
};

export default FeedStatistics;
