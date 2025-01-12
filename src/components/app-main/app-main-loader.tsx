import styles from "./app-main.module.css";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import {
  getLoadingStatus,
  getErrorStatus,
} from "../../services/burger-ingredients/selectors";
import { Loader } from "../loader/loader";

type TAppMainLoaderProps = {
  children: React.ReactNode;
};

function AppMainLoader({ children }: TAppMainLoaderProps): JSX.Element {
  const loading = useSelector(getLoadingStatus);
  const error = useSelector(getErrorStatus);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className={styles.error}>Ошибка загрузки данных</div>;
  }

  return <>{children}</>;
}

AppMainLoader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppMainLoader;
