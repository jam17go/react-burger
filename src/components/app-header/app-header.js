import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import NavItem from "./app-header-nav-item/app-header-nav-item.js";
import NavSection from "./app-header-nav-section/app-header-nav-section.js";
import LogoContainer from "./app-header-logo-container/app-header-logo-container.js";
import styles from "./app-header.module.css";
import { NavLink } from "react-router-dom";

const AppHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.menu}>
        <NavSection>
          <NavLink to="/" className={styles.menuItem}>
            <NavItem icon={<BurgerIcon />} text="Конструктор" />
          </NavLink>
          <NavItem icon={<ListIcon />} text="Лента заказов" />
        </NavSection>

        <LogoContainer />

        <NavSection>
          <NavLink to="/profile" className={styles.menuItem}>
            <NavItem icon={<ProfileIcon />} text="Личный кабинет" />
          </NavLink>
        </NavSection>
      </div>
    </div>
  );
};

export default AppHeader;
