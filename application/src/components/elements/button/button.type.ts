export type ButtonType = "primary" | "secondary" | "special";

export type ButtonProps = {
  icon?: JSX.Element;
  isDisabled?: boolean;
  clickHandler?: () => void;
  type: ButtonType;
};
