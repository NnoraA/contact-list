import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";

export const DialogData = createContext<{
  formIsOpen: boolean;
  setFormIsOpen: Dispatch<SetStateAction<boolean>>;
} | null>(null);

export const DialogContext = ({ children }: PropsWithChildren) => {
  const [formIsOpen, setFormIsOpen] = useState(false);

  return (
    <DialogData.Provider value={{ formIsOpen, setFormIsOpen }}>
      {children}
    </DialogData.Provider>
  );
};
