export type ContactProps = {
  id: string;
  name: string;
  phoneNumber: string;
  email?: string;
  picturePath?: string | File | undefined;
};
