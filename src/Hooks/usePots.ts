import { useQuery } from "@tanstack/react-query";
import { filteredPotsData } from "../Services/filteredPotsData";
export const usePots = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Pots"],
    queryFn: filteredPotsData,
  });

  return {
    data,
    isLoading,
    error,
  };
};
