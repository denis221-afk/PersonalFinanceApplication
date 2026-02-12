import React from "react";
import { useSummary } from "../../../Hooks/useSummary";
import SummaryElemet from "./SummaryElemet";
import Loading from "../../Loading/Loading";

const SummaryWrapper = () => {
  const { data, isLoading, error, isEmpty } = useSummary();

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (error) {
    return <div>Помилка завантаження</div>;
  }

  return (
    <div className="flex flex-1 flex-col items-center  justify-between w-full md:flex-row">
      <SummaryElemet
        isLoading={isLoading}
        total={data?.totalBalance}
        error={error}
        isEmpty={isEmpty}
        name="Поточний баланс"
        active={true}
      />
      <SummaryElemet
        isLoading={isLoading}
        total={data?.income}
        error={error}
        isEmpty={isEmpty}
        name="Дохід"
      />
      <SummaryElemet
        isLoading={isLoading}
        total={data?.expense}
        error={error}
        isEmpty={isEmpty}
        name="Витрати"
      />
    </div>
  );
};

export default SummaryWrapper;
