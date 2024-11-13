import { Button, Input } from "../../../../../shared/components";

import styles from "../styels/form.module.scss";

export const UserDataform = () => {
  return (
    <form className={styles.form}>
      <Input label="Имя пользователя" />
      <Input label="Почта" />
      <Input label="Пароль" />
      <Input label="Повторите пароль" />
      <Button text="Далее" />
    </form>
  );
};
