import React, { useState } from "react";
import Filters from "./Filters";
import TransactionTable from "./TransactionTable";
import Pagination from "./Pagination";
import ModalWrapper from "./modal/ModalWrapper";
import { useGetTransactiontsts } from "../../Hooks/useGetTransaction";

const Transactions = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const { data } = useGetTransactiontsts();
  const [currentPage, setCurrentPage] = useState(1);
  if (!data) return "Щось пішло не так";
  const activeShowItem = 6;
  const startInddex = (currentPage - 1) * activeShowItem;
  const endIndex = currentPage * activeShowItem;
  const visibleItem = data.slice(startInddex, endIndex);
  const totalPages = Math.ceil(data.length / activeShowItem);

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

        <TransactionTable transactions={visibleItem} />

        <Pagination totalPages={totalPages} currentPage={currentPage} />
      </div>
    </div>
  );
};

export default Transactions;
