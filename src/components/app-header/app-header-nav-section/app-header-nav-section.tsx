import styles from './app-header-nav-section.module.css';

type TNavSectionProps = {
  children: React.ReactNode;
};

const NavSection = ({ children }: TNavSectionProps): JSX.Element => {
  return (
    <div className={styles.navSection}>
      {children}
    </div>
  );
};

export default NavSection;