import React from "react";
import type { ITransactions } from "../../Type/Type";
import { useEffect, useState } from "react";
interface TransactionsListProps {
  data: ITransactions[] | null;
  wailetId: number | string;
  name: string;
  balance: number;
}

const Wailet = ({ data, wailetId, name, balance }: TransactionsListProps) => {
  const [transactions, setTransactions] = useState<ITransactions[] | null>(
    null,
  );

  useEffect(() => {
    let transactionsByWallet: ITransactions[] | undefined = data?.filter(
      (t) => t.walletId === wailetId,
    );

    setTransactions(transactionsByWallet || []);
  }, [data]);

  return (
    <div className="bg-[#0F4F4A]/10 backdrop-blur-xl border border-[#0F4F4A]/15 shadow-[0_8px_30px_rgba(15,79,74,0.08)] max-w-md p-6 rounded-2xl">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-teal-600" />
          <h3 className="text-sm font-semibold text-gray-900">{name}</h3>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-4 h-2 w-full rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-teal-600 transition-all"
          style={{ width: `100%` }}
        />
      </div>

      {/* Spent / Remaining */}
      <div className="mb-6 flex justify-between text-sm">
        <div>бюджет</div>
        <div className="text-right">
          <p className="text-gray-500">{balance}Грн</p>
        </div>
      </div>

      {/* Latest spending */}
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-semibold">Latest Spending</h4>
        <button className="text-xs text-gray-500 hover:underline">
          See All →
        </button>
      </div>

      <ul className="space-y-4">
        {transactions?.map((t) => (
          <li key={t.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-200 text-lg">
                {t.categoryId[0]}
              </div>

              <div>
                <p className="text-sm font-medium">{t.categoryId}</p>
              </div>
            </div>

            <p className="text-sm font-semibold text-gray-900">
              ${Math.abs(t.amount).toFixed(2)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wailet;
