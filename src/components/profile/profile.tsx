import styles from "./profile.module.css";
import { useDispatch } from "../../services/hooks";
import { logout } from "../../services/user/actions";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

export function Profile(): JSX.Element {
  const dispatch = useDispatch();
  const location = useLocation();

  const handleLogout = () => {
    // @ts-ignore
    dispatch(logout());
  };

  return (
    <>
      <div className={styles.parent}>
        <div className={styles.left}>
          <div className={styles.menu}>
            <NavLink
              to="profile-tab"
              className={({ isActive }) => {
                const isDefaultActive = location.pathname === "/profile";
                return isActive || isDefaultActive
                  ? styles.menuItemActive
                  : styles.menuItem;
              }}
            >
              <div>Профиль</div>
            </NavLink>
            <NavLink
              to="order-history-tab"
              className={({ isActive }) =>
                isActive ? styles.menuItemActive : styles.menuItem
              }
            >
              <div>История заказов</div>
            </NavLink>
            <NavLink
              to="/login"
              onClick={handleLogout}
              className={styles.menuItem}
            >
              <div>Выход</div>
            </NavLink>
            <div className={styles.menuInactive}>
              В этом разделе вы можете изменить свои персональные данные
            </div>
          </div>
        </div>

        <div className={styles.center}>
          <Outlet />
        </div>

        <div className={styles.right}></div>
      </div>
    </>
  );
}
