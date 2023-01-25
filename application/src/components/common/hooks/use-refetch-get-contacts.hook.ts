import { useQueryClient } from "react-query";

export const useRefetchGetContacts = () => {
  const queryClient = useQueryClient();
  return () => {
    queryClient.refetchQueries({
      queryKey: ["getContacts"],
    });
  };
};
