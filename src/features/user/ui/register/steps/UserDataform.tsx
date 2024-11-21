import { useContext } from "react";
import { Button, Input } from "../../../../../shared/components";

import styles from "../styels/form.module.scss";
import { RegisterContext } from "../RegisterStapper";
import { useRegisterMutation } from "../../../api/register.api";

export const UserDataform = () => {
  const { nextStep } = useContext(RegisterContext);

  const [register, { isLoading }] = useRegisterMutation();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // register({
    //   email: "test@test.ru",
    //   fullname: "nameTest",
    //   password: "12312312312",
    // })
    //   .then(console.log)
    //   .catch(console.log);
    nextStep();
  };

  return (
    <>
      {isLoading ? <h1>Loading...</h1> : null}
      <form className={styles.form} onSubmit={onSubmit}>
        <Input label="Имя пользователя" />
        <Input label="Почта" />
        <Input label="Пароль" />
        <Input label="Повторите пароль" />
        <Button text="Далее" type="submit" />
      </form>
    </>
  );
};
