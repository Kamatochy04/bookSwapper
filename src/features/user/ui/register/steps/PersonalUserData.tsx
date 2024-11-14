import { useContext } from "react";
import { RegisterContext } from "../RegisterStapper";
import { Button, Input } from "../../../../../shared/components";

import styles from "../styels/form.module.scss";

export const PersonalUserData = () => {
  const { prevStep } = useContext(RegisterContext);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const toBack = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    prevStep();
  };

  return (
    <form className={styles.form}>
      <Input label="Имя *" />
      <Input label="Фамилия " />
      <div className={styles.buttons}>
        <Button text="Назад" onClick={toBack} />
        <Button text="Далее" type="submit" />
      </div>
    </form>
  );
};
