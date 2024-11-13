import { Logo } from "../../../../shared/components";
import { Steps } from "../../../../widgets";
import { ConfirmEmailForm } from "./steps/ConfirmEmailForm";
import { PersonalUserData } from "./steps/PersonalUserData";
import { UserDataform } from "./steps/UserDataform";

import styles from "./styels/registerStapper.module.scss";

// const steps = [
//   {
//     content: <UserDataform />,
//   },
//   {
//     content: <ConfirmEmailForm />,
//   },
//   {
//     content: <PersonalUserData />,
//   },
// ];

export const RegisterStapper = () => {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <Logo />
        <PersonalUserData />
        <Steps currentStep={1} countOfStep={3} />
        <div className={styles.footer}>
          <p>Войти в аккаунт</p>
          <p>Забыли пароль</p>
        </div>
      </div>
    </div>
  );
};
