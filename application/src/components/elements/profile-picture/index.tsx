import Image from "next/image";

export const ProfilePicture = ({
  picture,
}: {
  picture: File | string | undefined;
}) => {
  return (
    <>
      <Image
        className="rounded-full border border-grey-60"
        src={
          picture ? `${process.env.API_URL}/${picture}` : "/photos/Default.png"
        }
        alt="profile picture"
        width={40}
        height={40}
      />
    </>
  );
};
