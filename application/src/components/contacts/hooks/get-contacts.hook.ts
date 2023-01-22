export const useGetContacts = async () => {
  const res = await fetch(`${process.env.API_URL}/contacts`);
  if (res.ok) {
    return await res.json();
  }
  throw new Error("Network response not ok");
};
