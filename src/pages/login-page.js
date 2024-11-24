import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login-page.module.css";
import { useDispatch } from "react-redux";
import { login } from "../services/user/actions";

export function LoginPage() {
  const dispatch = useDispatch();

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(login(event.target.email.value, event.target.password.value));
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>Вход</div>
        <form id="login-form" onSubmit={handleLogin}>
          <EmailInput
            type={'email'}
            name={"email"}
            placeholder="Логин"
            extraClass="mb-6"
          />
          <PasswordInput
            name={"password"}
            isIcon={true}
            extraClass="mb-6"
          />
          <Button type="primary" size="medium" extraClass="mb-20">
            Войти
          </Button>
        </form>

        <div className={styles.text}>
          Вы — новый пользователь?{" "}
          <a href="/register" className={styles.link}>
            Зарегистрироваться
          </a>
        </div>
        <div className={styles.text}>
          Забыли пароль?{" "}
          <a href="/forgot-password" className={styles.link}>
            Восстановить пароль
          </a>
        </div>
      </div>
    </>
  );
}
