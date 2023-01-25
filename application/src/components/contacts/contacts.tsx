import { GetServerSideProps, GetStaticProps } from "next";
import { dehydrate, DehydratedState, QueryClient, useQuery } from "react-query";
import { ContactListItem } from "./contact-list-item";
import { useGetContacts } from "./hooks/get-contacts.hook";

export const Contacts = () => {
  const { isLoading, isError, error, data } = useQuery<{
    contacts: [
      { id: string; picturePath: string; name: string; phoneNumber: string }
    ];
  }>("getContacts", useGetContacts);
  return (
    <div className="bg-grey-100 h-[75vh] whitespace-nowrap overflow-auto no-scrollbar">
      {data?.contacts.map((contact) => (
        <ContactListItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          phoneNumber={contact.phoneNumber}
          picturePath={contact.picturePath}
        ></ContactListItem>
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (): Promise<{
  props: { dehydratedState: DehydratedState };
}> => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("getContacts", useGetContacts);
  return { props: { dehydratedState: dehydrate(queryClient) } };
};
