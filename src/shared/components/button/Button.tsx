import { ComponentProps, FC } from "react";

import styles from "./button.module.scss";

type ButtonPropsType = ComponentProps<"button"> & {
  text: string;
  className?: string;
};

export const Button: FC<ButtonPropsType> = ({ text, className }) => {
  return <button className={`${className} ${styles.button}`}>{text}</button>;
};
