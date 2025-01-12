import {
  PasswordInput,
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./registration.module.css";
import { useDispatch } from "../../services/hooks";
import { register } from "../../services/registration/actions";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function Registration(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleNameInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setNameInput(event.target.value);
  };

  const handleEmailInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setEmailInput(event.target.value);
  };

  const handlePasswordInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPasswordInput(event.target.value);
  };

  const handleRegister = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const name = formData.get("name");
  
    // @ts-ignore
    dispatch(register(email, password, name));
    navigate("/login");
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>Регистрация</div>
        <form id="register-form" onSubmit={handleRegister}>
          <Input
            name={"name"}
            type="text"
            placeholder="Имя"
            extraClass="mb-6"
            value={nameInput}
            onChange={handleNameInput}
          />
          <Input
            name={"email"}
            type="email"
            placeholder="Логин"
            extraClass="mb-6"
            value={emailInput}
            onChange={handleEmailInput}
          />
          <PasswordInput
            name={"password"}
            extraClass="mb-6"
            value={passwordInput}
            onChange={handlePasswordInput}
          />
          <Button
            htmlType="submit"
            type="primary"
            size="medium"
            extraClass="mb-20"
          >
            Зарегистрироваться
          </Button>
        </form>
        <div className={styles.text}>
          Уже зарегистрированы?{" "}
          <NavLink to="/login" className={styles.link}>
            Войти
          </NavLink>
        </div>
      </div>
    </>
  );
}
