import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../services/user/actions";
import { NavLink } from "react-router-dom";
import React from "react";

export function Login(): JSX.Element {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const error = useSelector(
    // @ts-ignore
    (store) => store.user.loginError
  );

  const handleLogin = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(
      // @ts-ignore
      login(email, password)
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>Вход</div>
      
      {error && <div className={styles.error}>{error}</div>}

      <form id="login-form" onSubmit={handleLogin}>
        <Input
          type="email"
          name="email"
          placeholder="Логин"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          extraClass="mb-6"
        />
        <Input
          type="password"
          name="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          extraClass="mb-6"
        />
        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          extraClass="mb-20"
        >
          Войти
        </Button>
      </form>

      <div className={styles.text}>
        Вы — новый пользователь?{" "}
        <NavLink to="/register" className={styles.link}>
          Зарегистрироваться
        </NavLink>
      </div>
      <div className={styles.text}>
        Забыли пароль?{" "}
        <NavLink to="/forgot-password" className={styles.link}>
          Восстановить пароль
        </NavLink>
      </div>
    </div>
  );
}
