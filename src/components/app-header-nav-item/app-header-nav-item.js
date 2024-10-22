import styles from './app-header-nav-item.module.css';

const NavItem = ({ icon, text }) => {
  return (
    <li className={`${styles.navItem} pr-5 pl-5`}>
      {icon}
      <span className={`${styles.navText} ml-2`}>{text}</span>
    </li>
  );
};

export default NavItem;