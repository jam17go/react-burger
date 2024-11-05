import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./order-details.module.css";
import { useSelector } from "react-redux";
import { getOrder, getOrderErrorStatus, getOrderLoadingStatus } from "../../services/order/selectors";

const OrderDetails = () => {
  const loading = useSelector(getOrderLoadingStatus);
  const error = useSelector(getOrderErrorStatus);
  const order = useSelector(getOrder);

  if (loading) {
    return (
      <div>
        <div className={styles.orderProgress}>Загрузка...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <div className={styles.orderProgress}>Ошибка создания заказа</div>
      </div>
    );
  }

  if (order) {
    return (
      <div>
        <div className={styles.order}>{order.order.number}</div>
        <div className={styles.orderDescription}>идентификатор заказа</div>
  
        <CheckMarkIcon type="primary" />
  
        <div className={styles.orderStart}>Ваш заказ начали готовить</div>
        <div className={styles.orderMessage}>
          Дождитесь готовности на орбитальной станции
        </div>
      </div>
    );
  }
};

export default OrderDetails;
