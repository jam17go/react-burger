import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./reset-password.module.css";
import { useDispatch } from "../../services/hooks";
import { passwordResetReset } from "../../services/password-reset/actions";
import { Navigate, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useSelector } from "../../services/hooks";
import { FormEvent, useState } from "react";

export function ResetPassword(): JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordInput, setPasswordInput] = useState("");
  const [codeInput, setCodeInput] = useState("");

  const handlePasswordInput = (event: FormEvent<HTMLInputElement>): void => {
    setPasswordInput((event.target as HTMLInputElement).value);
  }

  const handleCodeInput = (event: FormEvent<HTMLInputElement>): void => {
    setCodeInput((event.target as HTMLInputElement).value);
  }

  const passwordResetFlag = useSelector(
    // @ts-ignore
    (store) => store.authenticationReducer.passwordResetFlag
  );

  if (passwordResetFlag === false) {
    return <Navigate to="/forgot-password" />;
  }

  const handleResetPassword = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const password = formData.get("password");
    const code = formData.get("code");

    // @ts-ignore
    dispatch(passwordResetReset(password, code));
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
            value={passwordInput}
            onChange={handlePasswordInput}
          />
          <Input
            placeholder="Введите код из письма"
            name={"code"}
            extraClass="mb-6"
            value={codeInput}
            onChange={handleCodeInput}
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
