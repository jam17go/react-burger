import {
  PasswordInput,
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "../../services/hooks";
import { useEffect, useState } from "react";
import { updateUser } from "../../services/profile/actions";

export function ProfileTab(): JSX.Element {
  const dispatch = useDispatch();

  // @ts-ignore
  const user = useSelector((store) => store.user.user);

  const [usernameValue, setUsernameValue] = useState(user?.name || "");
  const [emailValue, setEmailValue] = useState(user?.email || "");
  const [passwordValue, setPasswordValue] = useState(user?.password || "");

  useEffect(() => {
    setUsernameValue(user?.name || "");
    setEmailValue(user?.email || "");
    setPasswordValue(user?.password || "");
  }, [user]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // @ts-ignore
    dispatch(updateUser(usernameValue, emailValue, passwordValue));
  };

  const handleCancel = (): void => {
    setUsernameValue(user?.name || "");
    setEmailValue(user?.email || "");
    setPasswordValue(user?.password || "");
  };

  return (
    <>
      <form id="register-form" onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Имя"
          extraClass="mb-6"
          value={usernameValue}
          onChange={(e) => setUsernameValue(e.target.value)}
        />
        <Input
          type="email"
          name="login"
          placeholder="Логин"
          extraClass="mb-6"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
        />
        <PasswordInput
          name="password"
          extraClass="mb-6"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
        />

        <Button
          size="medium"
          type="secondary"
          htmlType="button"
          extraClass="mb-20 mr-5"
          onClick={handleCancel}
        >
          Отмена
        </Button>
        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          extraClass="mb-20"
        >
          Сохранить
        </Button>
      </form>
    </>
  );
}
