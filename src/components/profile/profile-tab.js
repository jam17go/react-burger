import {
  PasswordInput,
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile.module.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { updateUser } from "../../services/profile/actions";

export function ProfileTab() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.user);

  const [usernameValue, setUsernameValue] = useState(user.name);
  const [emailValue, setEmailValue] = useState(user.email);
  const [passwordValue, setPasswordValue] = useState();

  useEffect(() => {
    setUsernameValue(user.name);
    setPasswordValue(user.password);
    setEmailValue(user.email);
  }, [user]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateUser(usernameValue, emailValue, passwordValue));
  };

  return (
    <>
      <form id="register-form" onSubmit={handleSubmit}>
        <Input
          type={"text"}
          name={"name"}
          placeholder="Имя"
          isIcon={true}
          extraClass="mb-6"
          value={usernameValue}
          onChange={(e) => setUsernameValue(e.target.value)}
        />
        <Input
          type={"email"}
          name={"login"}
          placeholder="Логин"
          isIcon={true}
          extraClass="mb-6"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
        />
        <PasswordInput
          name={"password"}
          isIcon={true}
          extraClass="mb-6"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
        />
        <Button type="submit" size="medium" extraClass="mb-20">
          Сохранить
        </Button>
      </form>
    </>
  );
}
