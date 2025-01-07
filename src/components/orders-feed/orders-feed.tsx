import FeedDisplay from "./feed-display/feed-display";
import FeedStatistics from "./feed-statistics/feed-statistics";
import styles from "./orders-feed.module.css";

export function OrdersFeed(): JSX.Element {
  return (
    <div className={styles.section}>
      <div className={styles.header}>Лента заказов</div>
      <div className={styles.statusContainer}>
        <FeedDisplay />
        <FeedStatistics />
      </div>
    </div>
  );
}

export default OrdersFeed;
