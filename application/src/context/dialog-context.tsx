import { ContactProps } from "@application/components/contacts/contact.type";
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
  contactData?: ContactProps;
  setContactData?: Dispatch<SetStateAction<ContactProps | undefined>>;
} | null>(null);

export const DialogContext = ({ children }: PropsWithChildren) => {
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [contactData, setContactData] = useState<ContactProps | undefined>(
    undefined
  );

  return (
    <DialogData.Provider
      value={{ formIsOpen, setFormIsOpen, contactData, setContactData }}
    >
      {children}
    </DialogData.Provider>
  );
};
