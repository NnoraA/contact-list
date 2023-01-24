import Image from "next/image";
import { Button } from "../elements/button";
import { MoreButton } from "../elements/more-button";
import { ContactProps } from "./contact.type";

export const ContactListItem = ({
  id,
  picture,
  name,
  phoneNumber,
}: ContactProps) => {
  return (
    <div className="group flex justify-between p-7 ">
      <div className="flex ">
        <Image src="icons/settings.svg" alt="settings" width={24} height={24} />
        <div className="ml-7">
          <p className="headline-3 mb-1">{name}</p>
          <p className="message opacity-54">{phoneNumber}</p>
        </div>
      </div>
      <div className=" hidden group-hover:flex">
        <Button variation="secondary">
          <Image src="icons/mute.svg" alt="mute" width={24} height={24} />
        </Button>
        <Button variation="secondary">
          <Image src="icons/call.svg" alt="call" width={24} height={24} />
        </Button>

        <MoreButton contactId={id} />
      </div>
    </div>
  );
};
