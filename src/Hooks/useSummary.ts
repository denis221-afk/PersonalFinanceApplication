import { useQuery } from "@tanstack/react-query";
import { filteredSummaryData } from "../Services/filteredSummaryData";
import { Settings } from "../Api/SummarySettings";
export const useSummary = () => {
  const raw = localStorage.getItem("summarySetings");
  let summarySetings = Settings;

  try {
    if (raw) summarySetings = JSON.parse(raw);
  } catch {
    summarySetings = Settings;
  }
  const { data, isLoading, error } = useQuery({
    queryKey: ["summary", summarySetings],
    queryFn: () => filteredSummaryData(summarySetings),
  });

  if (!data) return { massenge: "Щось пішло не так", isLoading };
  if (data.isEmpty)
    return {
      isEmpty: true,
      data: null,
      isLoading,
      massenge: "Потрібно додати кошильок і транзакцій",
    };
  return { data, isLoading, error, isEmpty: false, massenge: "sucsses" };
};
