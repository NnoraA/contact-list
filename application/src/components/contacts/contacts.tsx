import { GetServerSideProps, GetStaticProps } from "next";
import { dehydrate, DehydratedState, QueryClient, useQuery } from "react-query";
import { ContactListItem } from "./contact-list-item";
import { useGetContacts } from "./hooks/get-contacts.hook";

export const Contacts = () => {
  const { isLoading, isError, error, data } = useQuery<{
    contacts: [{ id: string; picture: any; name: string; phoneNumber: number }];
  }>("getContacts", useGetContacts);

  return (
    <div className="bg-grey-100">
      {data?.contacts.map((contact) => (
        <ContactListItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          phoneNumber={contact.phoneNumber}
          picture={contact.picture}
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
