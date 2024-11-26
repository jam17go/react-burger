import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./reset-password.module.css";
import { useDispatch } from "react-redux";
import { passwordResetReset } from "../../services/password-reset/actions";
import { Navigate, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export function ResetPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const passwordResetFlag = useSelector(
    (store) => store.authenticationReducer.passwordResetFlag
  );

  console.log(passwordResetFlag)

  const handleResetPassword = (event) => {
    event.preventDefault();
    dispatch(
      passwordResetReset(event.target.password.value, event.target.code.value)
    );
    navigate("/login");
  };

  if (passwordResetFlag === false) {
    return <Navigate to="/forgot-password" />;
  }

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
          <Button
            htmlType="submit"
            type="primary"
            size="medium"
            extraClass="mb-20"
          >
            Сохранить
          </Button>
        </form>

        <div className={styles.text}>
          Вспомнили пароль?{" "}
          <NavLink to="/login" className={styles.link}>
            Войти
          </NavLink>
        </div>
      </div>
    </>
  );
}
