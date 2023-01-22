import { GetServerSideProps, GetStaticProps } from "next";
import { useEffect } from "react";
import { dehydrate, DehydratedState, QueryClient, useQuery } from "react-query";
import { Button } from "../elements/button";
import { useGetContacts } from "./hooks/get-contacts.hook";

export const Contacts = () => {
  const { isLoading, isError, error, data } = useQuery(
    "getContacts",
    useGetContacts
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <Button type="primary">Add new [primary]</Button>
      <Button type="secondary">Add new [secondary]</Button>
      <Button type="special">Add new [special]</Button>

      <h1 className="text-3xl font-bold underline blue-500">Hello world!</h1>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (): Promise<{
  props: { dehydratedState: DehydratedState };
}> => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("getContacts", useGetContacts);
  return { props: { dehydratedState: dehydrate(queryClient) } };
};
