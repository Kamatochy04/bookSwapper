import { ComponentProps, FC } from "react";

import { inputVariant, InputVariant } from "./inputVariant";

import styles from "./input.module.scss";

type InputPropsType = ComponentProps<"input"> &
  InputVariant & {
    label?: string;
  };

export const Input: FC<InputPropsType> = ({ variant, label, ...props }) => {
  return (
    <label className={inputVariant({ variant })}>
      <span className={styles.label}>{label}</span>
      <input {...props} />
    </label>
  );
};
