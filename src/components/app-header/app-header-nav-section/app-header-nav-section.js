import styles from './app-header-nav-section.module.css';
import PropTypes from 'prop-types';

const NavSection = ({ children }) => {
  return (
    <div className={styles.navSection}>
      {children}
    </div>
  );
};

NavSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavSection;