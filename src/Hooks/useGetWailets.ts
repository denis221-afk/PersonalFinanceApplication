import { useQuery } from "@tanstack/react-query";
import { getData } from "../Services/getData";
import { useAppSelector } from "../Store/hooksType";
export const useGetWailets = () => {
  const user = useAppSelector((state) => state.auth.user);
  if (!user)
    return {
      wailets: null,
      isLoading: false,
      isError: new Error()
    };
  const { getWallets } = getData(user?.uid);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["wailet"],
    queryFn: getWallets,
    staleTime: 1000 * 60,
  });

  return {
    wailets: data || null,
    isLoading,
    isError,
  };
};
