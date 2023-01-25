import Image from "next/image";

export const ProfilePicture = ({
  picture,
}: {
  picture: string | undefined;
}) => {
  return (
    <>
      <Image
        className="rounded-full border border-grey-60"
        src={
          picture ? `http://localhost:3001/${picture}` : "/photos/Default.png"
        }
        alt="profile picture"
        width={40}
        height={40}
      />
    </>
  );
};
