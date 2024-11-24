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
            <div>Профиль</div>
            <div>История заказов</div>
            <NavLink to="/" onClick={handleLogout} className={styles.menuItem}>
              <div>Выход</div>
            </NavLink>
            <div className={styles.menuInactive}>
              В этом разделе вы можете изменить свои персональные данные
            </div>
          </div>
        </div>

        <div className={styles.center} onSubmit={handleSubmit}>
          <form id="register-form">
            <Input
              type={"text"}
              name={"name"}
              placeholder="Имя"
              isIcon={true}
              extraClass="mb-6"
              value={usernameValue}
              onChange={(e) => setUsernameValue(e.target.value)}
            />
            <Input
              type={"email"}
              name={"login"}
              placeholder="Логин"
              isIcon={true}
              extraClass="mb-6"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
            <PasswordInput
              name={"password"}
              isIcon={true}
              extraClass="mb-6"
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
            />
            <Button type="submit" size="medium" extraClass="mb-20">
              Сохранить
            </Button>
          </form>
        </div>
        <div className={styles.right}></div>
      </div>
    </>
  );
}
