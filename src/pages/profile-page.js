import {
  EmailInput,
  PasswordInput,
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login-page.module.css";
import { useDispatch } from "react-redux";
import { getUser, updateUser } from "../services/profile/actions";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../services/profile/selectors";
import { useState } from "react";

export function ProfilePage() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [usernameValue, setUsernameValue] = useState(user.name)
  const [emailValue, setEmailValue] = useState(user.email)
  const [passwordValue, setPasswordValue] = useState()

  console.log(user);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  useEffect(() => {
    setUsernameValue(user.name)
    setPasswordValue(user.password)
    setEmailValue(user.email)
  }, [user])

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateUser(usernameValue, emailValue, passwordValue));
  }

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

        <div className={styles.center} onSubmit={handleSubmit}>
          <form id="register-form">
            <Input
              type={"text"}
              name={"name"}
              placeholder="Имя"
              isIcon={true}
              extraClass="mb-6"
              value={usernameValue}
              onChange={e => setUsernameValue(e.target.value)}
            />
            <Input
              type={"email"}
              name={"login"}
              placeholder="Логин"
              isIcon={true}
              extraClass="mb-6"
              value={emailValue}
              onChange={e => setEmailValue(e.target.value)}
            />
            <PasswordInput
              name={"password"}
              isIcon={true}
              extraClass="mb-6"
              value={passwordValue}
              onChange={e => setPasswordValue(e.target.value)}
            />
            <Button type="submit" size="medium" extraClass="mb-20">
              Сохранить
            </Button>
          </form>
        </div>
        <div className={styles.right}></div>
      </div>
    </>
  );
}
