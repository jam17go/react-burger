import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import NavItem from "./app-header-nav-item/app-header-nav-item.js";
import NavSection from "./app-header-nav-section/app-header-nav-section.js";
import LogoContainer from "./app-header-logo-container/app-header-logo-container.js";
import styles from "./app-header.module.css";

const AppHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.menu}>
        <NavSection>
          <NavItem icon={<BurgerIcon />} text="Конструктор" />
          <NavItem icon={<ListIcon />} text="Лента заказов" />
        </NavSection>

        <LogoContainer />

        <NavSection>
          <NavItem icon={<ProfileIcon />} text="Личный кабинет" />
        </NavSection>
      </div>
    </div>
  );
};

export default AppHeader;
