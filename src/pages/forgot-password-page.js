import {
  EmailInput,
  PasswordInput,
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login-page.module.css";

export function ForgotPasswordPage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>Восстановление пароля</div>
        <EmailInput
          //onChange={onChange}
          //value={value}
          name={"email"}
          placeholder="Логин"
          isIcon={true}
          extraClass="mb-6"
        />
        <Button type="primary" size="medium" extraClass="mb-20">
          Восстановить
        </Button>
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
