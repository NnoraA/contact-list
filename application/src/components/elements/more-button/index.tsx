import { Button } from "../button";
import Image from "next/image";
import { useState } from "react";
import { useDeleteContacts } from "./hooks/delete-contact.hook";
import { useMutation } from "react-query";

export const MoreButton = ({
  contactId,
}: {
  contactId: string;
}): JSX.Element => {
  const [open, setOpen] = useState(false);

  const mutation = useMutation({
    mutationFn: (id: string) => {
      return deleteCall(id);
    },
  });

  const deleteCall = useDeleteContacts();

  return (
    <div>
      <Button
        variation="secondary"
        clickHandler={() => {
          setOpen(!open);
        }}
      >
        <Image src="icons/more.svg" alt="more" width={24} height={24} />
      </Button>
      {open ? (
        <ul className="rounded-lg absolute bg-grey-80  w-56  ">
          <li className="flex items-center p-4 hover:bg-grey-70">
            <button className="flex items-center w-full">
              <Image
                src="icons/settings.svg"
                alt="settings"
                width={20}
                height={20}
              />
              <a className="interactive-element px-3">Edit</a>
            </button>
          </li>
          <li className="flex items-center p-4 hover:bg-grey-70">
            <button className="flex items-center w-full">
              <Image
                src="icons/favourite.svg"
                alt="favourite"
                width={20}
                height={20}
              />
              <a className="interactive-element px-3">Favourite</a>
            </button>
          </li>
          <li className="flex p-4 hover:bg-grey-70">
            <button
              onClick={() => mutation.mutate(contactId)}
              className="flex items-center w-full"
            >
              <Image
                src="icons/delete.svg"
                alt="delete"
                width={20}
                height={20}
              />
              <a className="interactive-element px-3">Remove</a>
            </button>
          </li>
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};
