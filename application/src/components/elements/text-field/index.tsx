import { TextFieldProps } from "./text-field.type";

export const TextField = ({
  label,
  type,
  value,
  placehorder,
  inputChangeHandler,
}: TextFieldProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="first" className="message opacity-54 pb-1 ">
        {label}
      </label>
      <input
        className="bg-grey-60 rounded-lg border border-solid border-grey-10 py-2 px-3 placeholder:interactive-element placehorder:opacity-32 interactive-element"
        type={type}
        id="first"
        name="first"
        value={value}
        placeholder={placehorder}
        onChange={inputChangeHandler}
      />
    </div>
  );
};
