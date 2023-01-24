import { ContactProps } from "@application/components/contacts/contact.type";

export const useAddContacts = async (contact: ContactProps) => {
  const res = await fetch(`${process.env.API_URL}/contacts`, {
    method: "POST",
    body: JSON.stringify(contact),
  });
  if (res.ok) {
    return await res.json();
  }
  throw new Error("Network response not ok");
};
