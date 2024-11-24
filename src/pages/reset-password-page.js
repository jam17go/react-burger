import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login-page.module.css";
import { useDispatch } from "react-redux";
import { passwordResetReset } from "../services/password-reset/actions";
import { useNavigate } from "react-router-dom";

export function ResetPasswordPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleResetPassword = (event) => {
    event.preventDefault();
    dispatch(
      passwordResetReset(event.target.password.value, event.target.code.value)
    );
    navigate("/login");
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>Восстановление пароля</div>
        <form id="forgot-password-for" onSubmit={handleResetPassword}>
          <Input
            type="password"
            name={"password"}
            extraClass="mb-6"
            placeholder="Введите новый пароль"
          />
          <Input
            placeholder="Введите код из письма"
            name={"code"}
            isIcon={true}
            extraClass="mb-6"
          />
          <Button type="submit" size="medium" extraClass="mb-20">
            Сохранить
          </Button>
        </form>

        <div className={styles.text}>
          Вспомнили пароль?{""}
          <a href="/login" className={styles.link}>
            Войти
          </a>
        </div>
      </div>
    </>
  );
}
