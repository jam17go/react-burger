import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header-logo-container.module.css';

const LogoContainer = () => {
  return (
    <div className={styles.logoContainer}>
      <Logo />
    </div>
  );
};

export default LogoContainer;
