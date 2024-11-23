import {
  EmailInput,
  PasswordInput,
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login-page.module.css";

export function ProfilePage() {
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.left}>
          <div className={styles.menu}>
            <div>Профиль</div>
            <div>История заказов</div>
            <div>Выход</div>
            <div className={styles.menuInactive}>
              В этом разделе вы можете изменить свои персональные данные
            </div>
          </div>
        </div>

        <div className={styles.center}>
          <Input
            name={"name"}
            placeholder="Имя"
            isIcon={true}
            extraClass="mb-6"
          />
          <Input
            name={"login"}
            placeholder="Логин"
            isIcon={true}
            extraClass="mb-6"
          />
          <PasswordInput name={"password"} isIcon={true} extraClass="mb-6" />
        </div>

        <div className={styles.right}></div>
      </div>
    </>
  );
}
