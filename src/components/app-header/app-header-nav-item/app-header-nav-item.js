import styles from './app-header-nav-item.module.css';

const NavItem = ({ icon, text }) => {
  return (
    <div className={`${styles.navItem} pr-5 pl-5`}>
      {icon}
      <span className={`${styles.navText} ml-2 text text_type_main-default`}>{text}</span>
    </div>
  );
};

export default NavItem;