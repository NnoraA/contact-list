import Image from "next/image";
import { useEffect } from "react";

export const PreviewProfilePicture = ({
  picture,
}: {
  picture: string | File | undefined;
}) => {
  return (
    <>
      <Image
        className="rounded-full border border-grey-60"
        src={
          picture
            ? typeof picture !== "string"
              ? URL.createObjectURL(picture)
              : `http://localhost:3001/${picture}`
            : "/photos/Default.png"
        }
        alt="profile picture"
        width={88}
        height={88}
      />
    </>
  );
};