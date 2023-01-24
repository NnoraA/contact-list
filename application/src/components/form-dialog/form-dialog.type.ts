import { Dispatch, SetStateAction } from "react";
import { ContactProps } from "../contacts/contact.type";

export type FormDialogProps = {
  setFormIsOpen: Dispatch<SetStateAction<boolean>>;
  contactData?: ContactProps;
};
