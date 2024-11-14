import { FC, useEffect, useState } from "react";
import styles from "./steps.module.scss";

type StepsProps = {
  currentStep: number;
  countOfStep: number;
};

export const Steps: FC<StepsProps> = ({ currentStep, countOfStep }) => {
  const [width, setWidht] = useState((currentStep / countOfStep) * 100);

  useEffect(() => {
    setWidht((currentStep / countOfStep) * 100);
  }, [currentStep]);

  return (
    <div className={styles.container}>
      <div className={styles.steps}>
        <span>{currentStep}</span>/{countOfStep}
      </div>
      <div className={styles.line}>
        <div className={styles.bar} style={{ width: `${width}%` }}></div>
      </div>
    </div>
  );
};
