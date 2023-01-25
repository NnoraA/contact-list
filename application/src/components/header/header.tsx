import { Button } from "../elements/button";
import Image from "next/image";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import { DialogData } from "@application/context/dialog-context";

export const Header = () => {
  const dialogContext = useContext(DialogData);

  return (
    <div className=" border-grey-60 border col-start-2 row-start-2 w-full h-full flex justify-between items-center p-3 sm:p-7">
      <h1 className="headline-1 p-0">Contacts</h1>
      <div className="flex items-center gap-7">
        <Image src="icons/settings.svg" alt="settings" width={24} height={24} />
        <Image src="icons/photo.svg" alt="photo" width={24} height={24} />
        <Button
          icon={true}
          variation="special"
          clickHandler={() => dialogContext?.setFormIsOpen(true)}
        >
          <Image src="icons/plus.svg" alt="plus" width={24} height={24} />
          Add new
        </Button>
      </div>
    </div>
  );
};
