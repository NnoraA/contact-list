import { FormEvent, useContext, useRef, useState } from "react";
import { Button } from "../elements/button";
import { TextField } from "../elements/text-field";
import Image from "next/image";
import { FormDialogProps } from "./form-dialog.type";
import { useMutation } from "react-query";
import { useAddContacts } from "./hooks/add-contact.hook";
import { useUpdateContacts } from "./hooks/update-contact.hook";
import { useRefetchGetContacts } from "../common/hooks/use-refetch-get-contacts.hook";
import { PreviewProfilePicture } from "../elements/preview-picture";
import { DialogData } from "@application/context/dialog-context";

export const FormDialog = ({ contactData }: FormDialogProps) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [picture, setPicture] = useState<string | File | undefined>();
  const dialogContext = useContext(DialogData);

  const actualBtnRef = useRef<HTMLInputElement>(null);
  const refetchContacts = useRefetchGetContacts();

  const addContactCall = useAddContacts();
  const addContactMutation = useMutation({
    mutationFn: () => {
      return addContactCall({ name, phoneNumber, email, picturePath: picture });
    },
  });

  const editContactCall = useUpdateContacts();
  const editContactMutation = useMutation({
    mutationFn: () =>
      editContactCall(contactData!.id, {
        name,
        phoneNumber,
        email,
        picturePath: picture,
      }),
  });

  const handleSumbit = async (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (contactData) {
      try {
        await editContactMutation.mutateAsync();
        dialogContext?.setFormIsOpen(false);
      } catch {}
    } else {
      try {
        await addContactMutation.mutateAsync();
        dialogContext?.setFormIsOpen(false);
      } catch {}
    }
    refetchContacts();
  };

  console.log(picture);

  return (
    <>
      <div className="absolute inset-y-0 w-screen h-screen bg-black/40 flex items-center justify-center">
        <div className=" bg-grey-100 absolute opacity-100 p-6 rounded-lg">
          <h2 className="headline-2">
            {contactData ? "Edit contact" : "Add contact"}
          </h2>
          <form onSubmit={handleSumbit} className="flex flex-col gap-6 ">
            <div className="flex my-6 gap-2 items-center">
              <PreviewProfilePicture picture={picture} />
              <Button
                clickHandler={() => actualBtnRef?.current?.click()}
                type="button"
              >
                <Image
                  src="icons/change.svg"
                  alt="change"
                  width={20}
                  height={20}
                />
                Change picture
              </Button>
              <input
                type="file"
                className="hidden"
                accept="image/*"
                ref={actualBtnRef}
                onInput={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  setPicture(event.currentTarget.files?.[0]);
                }}
              />
              {picture ? (
                <Button
                  type="button"
                  clickHandler={() => {
                    setPicture(undefined);
                    if (actualBtnRef.current?.value) {
                      actualBtnRef.current.value = "";
                    }
                  }}
                >
                  <Image
                    src="icons/delete.svg"
                    alt="delete"
                    width={20}
                    height={20}
                  />
                </Button>
              ) : (
                <></>
              )}
            </div>

            <TextField
              label="Name"
              type="text"
              value={name}
              placehorder="Jamie Wright"
              inputChangeHandler={(event) => setName(event.target.value)}
            />
            <TextField
              label="Phone number"
              type="text"
              value={phoneNumber}
              placehorder="+01 234 5678"
              inputChangeHandler={(event) => setPhoneNumber(event.target.value)}
            />
            <TextField
              label="Email address"
              type="text"
              value={email}
              placehorder="jamie.wright@mail.com"
              inputChangeHandler={(event) => setEmail(event.target.value)}
            />
            <div className="flex w-full justify-end items-center gap-2 mt-6">
              <Button
                variation="secondary"
                clickHandler={() => dialogContext?.setFormIsOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Done</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
