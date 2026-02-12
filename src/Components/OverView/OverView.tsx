import React from "react";
import SummaryWrapper from "./Summary/SummaryWrapper";
import Pots from "./Pots/Pots";
import TransactionsList from "./TransactionsList";
import BudgetChart from "./BudgetChart/BudgetChart";

const OverView = () => {
  return (
    <div className="px-10 w-full h-dvh pb-12">
      <SummaryWrapper />
      <main className="flex  justify-between flex-1 gap-6 flex-col md:flex-row mt-10">
        <div className="left max-w-152 w-full">
          <Pots />
          <TransactionsList />
        </div>
        <div className="right max-w-152 w-full">
          <BudgetChart />
        </div>
      </main>
    </div>
  );
};

export default OverView;
