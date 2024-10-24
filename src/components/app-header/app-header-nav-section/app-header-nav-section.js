import styles from './app-header-nav-section.module.css';

const NavSection = ({ children }) => {
  return (
    <div className={`${styles.navSection}`}>
      {children}
    </div>
  );
};

export default NavSection;