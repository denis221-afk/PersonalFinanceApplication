import { useQuery } from "@tanstack/react-query";
import { getData } from "../Services/getData";
import { useState } from "react";
import { useAppSelector } from "../Store/hooksType";
export const useGetTransactiontsts = () => {
  const user = useAppSelector((state) => state.auth.user);
  if (!user)
    return {
      isLoading: false,
      isError: "Щось пішло не так",
      data: null,
    };
  const { getTransactions } = getData(user?.uid);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["transaction"],
    queryFn: getTransactions,
  });
  if (!data)
    return {
      isLoading: false,
      isError,
      data: null,
    };
  return {
    isLoading,
    data,
    isError,
  };
};
