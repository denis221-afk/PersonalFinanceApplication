import { useQuery } from "@tanstack/react-query";
import { filteredSummaryData } from "../Services/filteredSummaryData";
import { Settings } from "../Api/SummarySettings";
import { useAppSelector } from "../Store/hooksType";
export const useSummary = () => {
  const user = useAppSelector((state) => state.auth.user);
  if (!user)
    return {
      data: null,
      isLoading: false,
      isError: "щось пішло не так",
      error: "Eror 404 user",
      isEmpty: false,
    };
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["summary"],
    queryFn: async () => {
      const res = await filteredSummaryData(Settings, user?.uid);
      return res;
    },
    enabled: !!user,
    staleTime: 1000 * 60,
  });

  return { data, isLoading, isError, error, isEmpty: data?.isEmpty ?? false };
};
