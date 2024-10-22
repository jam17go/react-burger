import styles from './app-header-nav-section.module.css';

const NavSection = ({ children }) => {
  return (
    <ul className={`${styles.navSection}`}>
      {children}
    </ul>
  );
};

export default NavSection;