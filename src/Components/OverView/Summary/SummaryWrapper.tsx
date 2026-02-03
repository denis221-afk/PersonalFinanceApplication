import React from "react";
import { useSummary } from "../../../Hooks/useSummary";
import SummaryElemet from "./SummaryElemet";

const SummaryWrapper = () => {
  const { data, isLoading, error, massenge, isEmpty } = useSummary();

  if (!data && !isEmpty) return <>{massenge}</>;
  return (
    <div className="flex flex-1 flex-col items-center  justify-between w-full md:flex-row">
      <SummaryElemet
        isLoading={isLoading}
        total={data?.totalBalance}
        error={error}
        massenge={massenge}
        isEmpty={isEmpty}
        name="Current balance"
        active={true}
      />
      <SummaryElemet
        isLoading={isLoading}
        total={data?.income}
        error={error}
        massenge={massenge}
        isEmpty={isEmpty}
        name="Icome"
      />
      <SummaryElemet
        isLoading={isLoading}
        total={data?.expense}
        error={error}
        massenge={massenge}
        isEmpty={isEmpty}
        name="Expense"
      />
    </div>
  );
};

export default SummaryWrapper;
