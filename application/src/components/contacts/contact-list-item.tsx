import Image from "next/image";
import { Button } from "../elements/button";
import { ProfilePicture } from "../elements/profile-picture";
import { MoreButton } from "../more-button";
import { ContactProps } from "./contact.type";

export const ContactListItem = ({
  id,
  picturePath: picture,
  name,
  phoneNumber,
  email,
}: ContactProps) => {
  return (
    <div className="group flex justify-between p-3 sm:p-7">
      <div className="flex ">
        <ProfilePicture picture={picture} />
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

        <MoreButton
          contactData={{ id, picturePath: picture, name, phoneNumber, email }}
        />
      </div>
    </div>
  );
};
