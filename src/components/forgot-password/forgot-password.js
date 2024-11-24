import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./forgot-password.module.css";
import { useDispatch } from "react-redux";
import { passwordReset } from "../../services/password-reset/actions";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export function ForgotPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleResetPassword = (event) => {
    event.preventDefault();
    dispatch(passwordReset(event.target.email.value));
    navigate('/reset-password');
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
          <NavLink to='/login' className={styles.link}>Войти</NavLink>
        </div>
      </div>
    </>
  );
}
