import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login-page.module.css";

export function LoginPage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>Вход</div>
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
          Войти
        </Button>
        <div className={styles.text}>
            Вы — новый пользователь? <a href="/register" className={styles.link}>Зарегистрироваться</a>
        </div>
        <div className={styles.text}>
            Забыли пароль? <a href="/forgot-password" className={styles.link}>Восстановить пароль</a>
        </div>
      </div>
    </>
  );
}
