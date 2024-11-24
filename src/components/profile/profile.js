import {
  PasswordInput,
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile.module.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { updateUser } from "../../services/profile/actions";
import { logout } from "../../services/user/actions";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

export function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.user);

  const [usernameValue, setUsernameValue] = useState(user.name);
  const [emailValue, setEmailValue] = useState(user.email);
  const [passwordValue, setPasswordValue] = useState();

  useEffect(() => {
    setUsernameValue(user.name);
    setPasswordValue(user.password);
    setEmailValue(user.email);
  }, [user]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateUser(usernameValue, emailValue, passwordValue));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className={styles.parent}>
        <div className={styles.left}>
          <div className={styles.menu}>
            <NavLink to="profile-tab" className={styles.menuItem}>
              <div>Профиль</div>
            </NavLink>
            <NavLink to="order-history-tab" className={styles.menuItem}>
              <div>История заказов</div>
            </NavLink>
            <NavLink to="/login" onClick={handleLogout} className={styles.menuItem}>
              <div>Выход</div>
            </NavLink>
            <div className={styles.menuInactive}>
              В этом разделе вы можете изменить свои персональные данные
            </div>
          </div>
        </div>

        <div className={styles.center} onSubmit={handleSubmit}>
          <Outlet />
        </div>

        <div className={styles.right}></div>
      </div>
    </>
  );
}
