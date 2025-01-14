import FeedDisplay from "./feed-display/feed-display";
import FeedStatistics from "./feed-statistics/feed-statistics";
import styles from "./orders-feed.module.css";
import { useEffect } from "react";
import { WS_CONNECTION_START } from "../../services/middleware/actions";
import { useDispatch } from "../../services/hooks";
import { calculateOrders, flushState } from "../../services/orders-feed/actions";
import { useSelector } from "../../services/hooks";
import { Loader } from "../loader/loader";
import { getAllIngredients, getLoadingStatus } from "../../services/burger-ingredients/selectors";

export function OrdersFeed(): JSX.Element {
  const dispatch = useDispatch();
  const allIngredients = useSelector(getAllIngredients);
  const ingredientsLoading = useSelector(getLoadingStatus);
  const ordersApiResponse = useSelector((store) => store.ordersFeed.ordersApiResponse);
  const connectedUrl = useSelector((store) => store.ordersFeed.url);

  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_START,
      payload: "wss://norma.nomoreparties.space/orders/all",
    });

    return () => {
      dispatch(flushState());
    };
  }, []);

  useEffect(() => {
    if (!ordersApiResponse) {
      return;
    }
    dispatch(calculateOrders(allIngredients, ordersApiResponse));
  }, [ingredientsLoading, ordersApiResponse, connectedUrl]);

  if ( connectedUrl !== "wss://norma.nomoreparties.space/orders/all" ) {
    return (
      <Loader />
    );
  }

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
