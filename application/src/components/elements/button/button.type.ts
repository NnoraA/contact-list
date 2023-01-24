export type ButtonType = "primary" | "secondary" | "special";

export type ButtonProps = {
  icon?: boolean;
  isDisabled?: boolean;
  clickHandler?: () => void;
  blurHandler?: (e: any) => void;
  variation?: ButtonType;
  type?: "submit" | "reset" | "button";
};
