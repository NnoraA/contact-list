import { FormEvent, useState } from "react";
import { Button } from "../elements/button";
import { TextField } from "../elements/text-field";
import Image from "next/image";
import { FormDialogProps } from "./form-dialog.type";

export const FormDialog = ({ setFormIsOpen, contactData }: FormDialogProps) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSumbit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="absolute inset-y-0 w-screen h-screen bg-black/40 flex items-center justify-center">
        <div className=" bg-grey-100 absolute opacity-100 p-6 rounded-lg">
          <h2 className="headline-2">
            {contactData ? "Edit contact" : "Add contact"}
          </h2>
          <form onSubmit={handleSumbit} className="flex flex-col gap-6">
            <div className="flex my-6 gap-2">
              <Button>
                <Image
                  src="icons/change.svg"
                  alt="change"
                  width={20}
                  height={20}
                />
                Change picture
              </Button>
              <Button>
                <Image
                  src="icons/delete.svg"
                  alt="delete"
                  width={20}
                  height={20}
                />
              </Button>
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
            <div className="flex w-full justify-end items-center gap-2">
              <Button
                variation="secondary"
                clickHandler={() => setFormIsOpen(false)}
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
