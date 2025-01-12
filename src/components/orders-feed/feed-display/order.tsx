import { useParams } from "react-router";
import { useSelector } from "../../../services/hooks";
import { getOrders } from "../../../services/orders-feed/selectors";
import { getHumanReadableDate } from "../../../utils/date-utils";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useEffect } from "react";
import { loadOrder } from "../../../services/feed-order/actions";
import { useDispatch } from "../../../services/hooks";
import { getAllIngredients, getLoadingStatus } from "../../../services/burger-ingredients/selectors";
import { useMemo } from "react";
import styles from "./feed-display.module.css";

export function Order(): JSX.Element {
  const { id } = useParams();
  const allIngredients = useSelector(getAllIngredients);
  const dispatch = useDispatch();
  const ingredientsLoading = useSelector(getLoadingStatus);

  useEffect(() => {
    if (id && allIngredients.length > 0) {
      dispatch(loadOrder(id, allIngredients));
    }
  }, [ingredientsLoading]);

  const order = useSelector((store) => store.feedOrder.order);
  const isLoading = useSelector((store) => store.feedOrder.loading);
  const hasError = useSelector((store) => store.feedOrder.error);

  //const orders = useSelector(getOrders);
  //const order = orders.find((order) => order.number === id);

  if (hasError) {
    return <>Error</>;
  }

  if (isLoading || ingredientsLoading) {
    return <>Загрузка...</>;
  }

  if (!order) {
    return <>Заказ не найден</>;
  }
  
  return (
    <div className={styles.orderContainer}>
      <div className={styles.number}>#{order.number}</div>
      <div className={styles.orderName}>{order.name}</div>
      <div className={styles.orderStatus}>{order.status}</div>
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
