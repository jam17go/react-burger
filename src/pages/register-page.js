import {
  EmailInput,
  PasswordInput,
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login-page.module.css";

export function RegisterPage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>Регистрация</div>
        <Input
          //onChange={onChange}
          //value={value}
          name={"name"}
          placeholder="Имя"
          isIcon={true}
          extraClass="mb-6"
        />
        <EmailInput
          //onChange={onChange}
          //value={value}
          name={"email"}
          placeholder="Логин"
          isIcon={true}
          extraClass="mb-6"
        />
        <PasswordInput
          //onChange={onChange}
          //value={value}
          name={"password"}
          isIcon={true}
          extraClass="mb-6"
        />
        <Button type="primary" size="medium" extraClass="mb-20">
          Зарегистрироваться
        </Button>
        <div className={styles.text}>
          Уже зарегистрированы?{" "}
          <a href="/login" className={styles.link}>
            Войти
          </a>
        </div>
      </div>
    </>
  );
}
