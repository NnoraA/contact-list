import { useGetContacts } from "@application/components/contacts/hooks/get-contacts.hook";

export const useDeleteContacts = () => {
  return async (id: string) => {
    console.log(id);
    const res = await fetch(`${process.env.API_URL}/contacts/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    if (res.ok) {
      return;
    }
    throw new Error("Network response not ok");
  };
};
