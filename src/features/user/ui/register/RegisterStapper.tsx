import { createContext, useEffect, useState } from "react";
import { Logo } from "../../../../shared/components";
import { Steps } from "../../../../widgets";
import { ConfirmEmailForm } from "./steps/ConfirmEmailForm";
import { PersonalUserData } from "./steps/PersonalUserData";
import { UserDataform } from "./steps/UserDataform";

import {
  getSessinStorage,
  removeSessionStorage,
  setSessionStorage,
} from "../../../../shared/utils/sessionStorage";
import styles from "./styels/registerStapper.module.scss";
import { AuthContexType } from "../../../../model";

const steps = [<UserDataform />, <ConfirmEmailForm />, <PersonalUserData />];

export const RegisterContext = createContext<AuthContexType>({
  prevStep: () => {},
  nextStep: () => {},
});

export const RegisterStapper = () => {
  const [currentStep, setCurrentStep] = useState(
    Number(getSessinStorage("register-key")) | 0
  );

  useEffect(() => {
    setSessionStorage("register-key", currentStep);

    setCurrentStep(Number(getSessinStorage("register-key")));
  }, [currentStep, setCurrentStep]);

  useEffect(() => {
    return () => {
      removeSessionStorage("register-key");
    };
  }, []);

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };
  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <Logo />

        <div className={styles.content}>
          <RegisterContext.Provider value={{ nextStep, prevStep }}>
            {steps[currentStep]}
          </RegisterContext.Provider>
        </div>

        <Steps currentStep={currentStep + 1} countOfStep={3} />
        <div className={styles.footer}>
          <p>Войти в аккаунт</p>
          <p>Забыли пароль</p>
        </div>
      </div>
    </div>
  );
};
