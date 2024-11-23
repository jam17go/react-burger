import {
  PasswordInput,
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login-page.module.css";

export function ResetPasswordPage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>Восстановление пароля</div>
        <PasswordInput
          //onChange={onChange}
          //value={value}
          name={"password"}
          isIcon={true}
          extraClass="mb-6"
          placeholder="Введите новый пароль"
        />
        <Input
          //onChange={onChange}
          //value={value}
          name={"name"}
          placeholder="Введите код из письма"
          isIcon={true}
          extraClass="mb-6"
        />
        <Button type="primary" size="medium" extraClass="mb-20">
          Сохранить
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
