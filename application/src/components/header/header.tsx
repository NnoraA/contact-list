import { Button } from "../elements/button";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

export const Header = ({
  setFormIsOpen,
}: {
  setFormIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className=" border-grey-60 border col-start-2 row-start-2 w-full h-full flex justify-between items-center">
      <h1 className="headline-1">Contacts</h1>
      <div className="flex items-center gap-7">
        <Image src="icons/settings.svg" alt="settings" width={24} height={24} />
        <Image src="icons/photo.svg" alt="photo" width={24} height={24} />
        <Button
          icon={true}
          variation="special"
          clickHandler={() => setFormIsOpen(true)}
        >
          <Image src="icons/plus.svg" alt="plus" width={24} height={24} />
          Add new
        </Button>
      </div>
    </div>
  );
};
