import { ComponentProps, FC } from "react";

import styles from "./input.module.scss";

type InputPropsType = ComponentProps<"input"> & {
  label?: string;
};

export const Input: FC<InputPropsType> = ({ label, ...props }) => {
  return (
    <label className={styles.container}>
      <span className={styles.label}>{label}</span>
      <input {...props} />
    </label>
  );
};
