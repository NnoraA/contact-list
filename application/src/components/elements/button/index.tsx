import { PropsWithChildren } from "react";
import { ButtonProps } from "./button.type";
import styles from "./button.module.css";

const typeMap = {
  primary: styles["btn-primary"],
  secondary: styles["btn-secondary"],
  special: styles["btn-special"],
} as const;

export const Button = ({
  icon,
  children,
  isDisabled = false,
  clickHandler,
  type = "primary",
}: PropsWithChildren<ButtonProps>): JSX.Element => {
  const buttonType = typeMap[type];
  const iconClassName = icon ? styles.icon : styles["no-icon"];

  return (
    <>
      <button
        disabled={isDisabled}
        onClick={clickHandler}
        className={`${styles.btn} ${buttonType} ${iconClassName}`}
      >
        {children}
      </button>
    </>
  );
};
