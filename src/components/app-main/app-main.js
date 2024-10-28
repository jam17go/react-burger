import styles from "./app-main.module.css";
import PropTypes from "prop-types";

function AppMain({ loading, error, children }) {
  if (loading) {
    return <div className={styles.loading}>Загрузка...</div>;
  }

  if (error) {
    return <div className={styles.error}>Ошибка загрузки данных</div>;
  }

  return children;
}

AppMain.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export default AppMain;
