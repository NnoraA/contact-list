import { PropsWithChildren, useContext, useState } from "react";
import Image from "next/image";
import { Header } from "./header/header";
import { FormDialog } from "./form-dialog";
import { useRefetchGetContacts } from "./common/hooks/use-refetch-get-contacts.hook";
import { DialogData } from "@application/context/dialog-context";

export const Layout = ({ children }: PropsWithChildren) => {
  const dialogContext = useContext(DialogData);

  return (
    <>
      <div className="bg-grey-100 w-full h-full grid grid-cols-[18%_auto_18%] sm:grid-cols-[20%_auto_20%] grid-rows-[12%_12%_auto]">
        <div className="border-grey-60 col-start-2 border-x"></div>
        <div className="border-grey-60 w-full h-full col-start-1 border-y row-start-2 flex justify-end p-7">
          <Image
            src="icons/back-arrow.svg"
            alt="back-arrow"
            width={24}
            height={24}
          />
        </div>
        <Header />
        <main className=" border-grey-60 border-x col-start-2 row-start-3">
          <section>{children}</section>
        </main>
        <div className="border-grey-60 w-full h-full col-start-3 border-y row-start-2 flex p-7">
          <Image
            src="icons/light-mode.svg"
            alt="light-mode"
            width={24}
            height={24}
          />
        </div>
        {dialogContext?.formIsOpen && <FormDialog />}
      </div>
    </>
  );
};
