import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header-logo-container.module.css";

const LogoContainer = (): JSX.Element => {
  return (
    <div className={styles.logoContainer}>
      <Logo />
    </div>
  );
};

export default LogoContainer;
