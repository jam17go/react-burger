import React from "react";
import { NavLink } from "react-router-dom";
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import NavItem from "./app-header-nav-item/app-header-nav-item";
import NavSection from "./app-header-nav-section/app-header-nav-section";
import LogoContainer from "./app-header-logo-container/app-header-logo-container";
import styles from "./app-header.module.css";

const getNavLinkClassName = ({ isActive }: { isActive: boolean }): string =>
  isActive ? styles.menuItemActive : styles.menuItem;

const AppHeader: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.menu}>
        <NavSection>
          <NavLink to="/" className={getNavLinkClassName} aria-label="Конструктор">
            <NavItem icon={<BurgerIcon type="primary" />} text="Конструктор" />
          </NavLink>
          <NavLink
            to="/orders"
            className={getNavLinkClassName}
            aria-label="Лента заказов"
          >
            <NavItem icon={<ListIcon type="primary" />} text="Лента заказов" />
          </NavLink>
        </NavSection>

        <LogoContainer />

        <NavSection>
          <NavLink
            to="/profile"
            className={getNavLinkClassName}
            aria-label="Личный кабинет"
          >
            <NavItem icon={<ProfileIcon type="primary" />} text="Личный кабинет" />
          </NavLink>
        </NavSection>
      </div>
    </div>
  );
};

export default AppHeader;
