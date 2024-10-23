import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import NavItem from '../app-header-nav-item/app-header-nav-item.js';
import NavSection from '../app-header-nav-section/app-header-nav-section.js';
import LogoContainer from '../app-header-logo-container/app-header-logo-container.js';
import styles from './app-header.module.css';

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.navContainer} pt-4 pb-4`}>
        {/* Left Section: Navigation Buttons */}
        <NavSection>
          <NavItem icon={<BurgerIcon />} text="Конструктор" />
          <NavItem icon={<ListIcon />} text="Лента заказов" />
        </NavSection>

        {/* Center Section: Logo */}
        <LogoContainer />

        {/* Right Section: Profile Button */}
        <NavSection>
          <NavItem icon={<ProfileIcon />} text="Личный кабинет" />
        </NavSection>
      </nav>
    </header>
  );
};

export default AppHeader;
