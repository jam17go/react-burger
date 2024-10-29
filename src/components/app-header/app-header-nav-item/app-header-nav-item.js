import styles from "./app-header-nav-item.module.css";

const NavItem = ({ icon, text }) => {
  return (
    <div className={styles.navItem}>
      {icon}
      <span className={styles.navText}>{text}</span>
    </div>
  );
};

export default NavItem;
