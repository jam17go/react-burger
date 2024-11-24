import {
    PasswordInput,
    Button,
    Input,
  } from "@ya.praktikum/react-developer-burger-ui-components";
  import styles from "./registration.module.css";
  import { useDispatch } from "react-redux";
  import { register } from "../../services/registration/actions";
  import { NavLink } from "react-router-dom";

  export function Registration() {
    const dispatch = useDispatch();
  
    const handleRegister = (event) => {
      event.preventDefault();
      dispatch(
        register(event.target.email.value, event.target.password.value, event.target.name.value)
      );
    }
  
    return (
      <>
        <div className={styles.container}>
          <div className={styles.header}>Регистрация</div>
          <form id="register-form" onSubmit={handleRegister}>
            <Input
              name={"name"}
              type="text"
              placeholder="Имя"
              isIcon={true}
              extraClass="mb-6"
            />
            <Input
              name={"email"}
              type='email'
              placeholder="Логин"
              isIcon={true}
              extraClass="mb-6"
            />
            <PasswordInput
              name={"password"}
              isIcon={true}
              extraClass="mb-6"
            />
            <Button type="submit" size="medium" extraClass="mb-20">
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
  