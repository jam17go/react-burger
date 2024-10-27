import PropTypes from "prop-types";
import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./order-details.module.css";

const OrderDetails = ({ orderId }) => {
  return (
    <div>
      <div className={styles.order}>{orderId}</div>
      <div className={styles.orderDescription}>идентификатор заказа</div>

      <CheckMarkIcon type="primary" />

      <div className={styles.orderStart}>Ваш заказ начали готовить</div>
      <div className={styles.orderMessage}>
        Дождитесь готовности на орбитальной станции
      </div>
    </div>
  );
};

OrderDetails.propTypes = {
  orderId: PropTypes.string.isRequired,
};

export default OrderDetails;
