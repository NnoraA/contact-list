import { ChangeEvent } from "react";

export type TextFieldProps = {
  label: string;
  type: string;
  value: string;
  placehorder: string;
  inputChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};
