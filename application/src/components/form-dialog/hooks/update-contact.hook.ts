import { ContactProps } from "@application/components/contacts/contact.type";

export const useUpdateContacts = () => {
  return async (contactId: string, contact: Partial<ContactProps>) => {
    const formData = new FormData();
    Object.entries(contact).forEach(([key, value]) =>
      formData.append(key, value)
    );

    const res = await fetch(`${process.env.API_URL}/contacts/${contactId}`, {
      method: "PUT",
      body: formData,
    });
    if (res.ok) {
      return await res.json();
    }
    throw new Error("Network response not ok");
  };
};
