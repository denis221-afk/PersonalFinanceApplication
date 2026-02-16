import React, { useState } from "react";
import type { ITransactions } from "../../Type/Type";
import Filters from "./Filters";
import TransactionTable from "./TransactionTable";
import Pagination from "./Pagination";
import ModalWrapper from "./modal/ModalWrapper";

const transactions: ITransactions[] = [
  {
    id: 1,
    categoryId: "General",
    createdAt: Date.now(),
    amount: 75.5,
    walletId: 184.10464178189878,
    userId: "bWJJJRTNH9RXWSxH7IvXac7Pi4H3",
    type: "expense",
    currency: "ГРН",
  },
  {
    id: 2,
    categoryId: "General",
    createdAt: Date.now(),
    amount: 75.5,
    walletId: 184.10464178189878,
    userId: "bWJJJRTNH9RXWSxH7IvXac7Pi4H3",
    type: "income",
    currency: "ГРН",
  },
];

const Transactions = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen flex  flex-1 flex-col p-10">
      <ModalWrapper isOpen={isOpen} onClose={() => setOpen(false)} />
      <header className="flex justify-between w-full mb-10">
        {" "}
        <h1 className="text-2xl font-semibold mb-6 hidden md:block">
          Транзакції
        </h1>
        <button
          className="bg-[#0F4F4A] text-white py-3 px-7 rounded-sm cursor-pointer hover:bg-[#198077] transition-all"
          onClick={() => setOpen(!isOpen)}
        >
          Добавити транзакцію
        </button>
      </header>

      <div className="max-w-5xl w-full mx-auto bg-white rounded-2xl p-6 shadow-lg">
        <Filters />

        <TransactionTable transactions={transactions} />

        <Pagination />
      </div>
    </div>
  );
};

export default Transactions;
