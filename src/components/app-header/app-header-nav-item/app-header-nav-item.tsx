import styles from "./app-header-nav-item.module.css";
import React from "react";

type TNavItemProps = {
  icon: React.ReactNode; // Accepts JSX
  text: string;
};

const NavItem = ({ icon, text }: TNavItemProps): JSX.Element => {
  return (
    <div className={styles.navItem}>
      {icon}
      <span className={styles.navText}>{text}</span>
    </div>
  );
};

export default NavItem;
