import { FC } from "react";
import styles from "./steps.module.scss";

type StepsProps = {
  currentStep: number;
  countOfStep: number;
};

export const Steps: FC<StepsProps> = ({ currentStep, countOfStep }) => {
  return (
    <div className={styles.container}>
      <div className={styles.steps}>
        <span>{currentStep}</span>/{countOfStep}
      </div>
      <div className={styles.line}>
        <div className={styles.bar}></div>
      </div>
    </div>
  );
};
