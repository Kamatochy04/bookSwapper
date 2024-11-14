import { useContext } from "react";
import { Button, Input } from "../../../../../shared/components";
import { RegisterContext } from "../RegisterStapper";

import styles from "../styels/form.module.scss";

export const ConfirmEmailForm = () => {
  const { nextStep, prevStep } = useContext(RegisterContext);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    nextStep();
  };

  const toBack = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    prevStep();
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <p>На почту отправлен код подтверждения</p>
      <Input label="Код" />
      <div className={styles.buttons}>
        <Button text="Назад" onClick={toBack} />
        <Button text="Далее" type="submit" />
      </div>
    </form>
  );
};
