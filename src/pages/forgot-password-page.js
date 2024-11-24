import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login-page.module.css";
import { useDispatch } from "react-redux";
import { passwordReset } from "../services/password-reset/actions";

export function ForgotPasswordPage() {
  const dispatch = useDispatch();

  const handleResetPassword = (event) => {
    event.preventDefault();
    dispatch(passwordReset(event.target.email.value));
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>Восстановление пароля</div>
        <form id="forgot-password-form" onSubmit={handleResetPassword}>
          <Input
            type='email'
            name={"email"}
            placeholder="Логин"
            extraClass="mb-6"
          />
          <Button
            type="submit"
            size="medium"
            extraClass="mb-20"
          >
            Восстановить
          </Button>
        </form>

        <div className={styles.text}>
          Вспомнили пароль?{" "}
          <a href="/login" className={styles.link}>
            Войти
          </a>
        </div>
      </div>
    </>
  );
}