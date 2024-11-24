import styles from "./app-main.module.css";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getLoadingStatus, getErrorStatus } from "../../services/burger-ingredients/selectors.js";

function AppMainLoader({ children }) {
  const loading = useSelector(getLoadingStatus);
  const error = useSelector(getErrorStatus);

  if (loading) {
    return <div className={styles.loading}>Загрузка...</div>;
  }

  if (error) {
    return <div className={styles.error}>Ошибка загрузки данных</div>;
  }

  return children;
}

AppMainLoader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppMainLoader;
