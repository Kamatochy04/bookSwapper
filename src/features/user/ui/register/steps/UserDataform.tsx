import { useContext } from "react";
import { Button, Input } from "../../../../../shared/components";

import styles from "../styels/form.module.scss";
import { RegisterContext } from "../RegisterStapper";

export const UserDataform = () => {
  const { nextStep } = useContext(RegisterContext);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    nextStep();
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Input label="Имя пользователя" />
      <Input label="Почта" />
      <Input label="Пароль" />
      <Input label="Повторите пароль" />
      <Button text="Далее" type="submit" />
    </form>
  );
};
