import type { ITransactions } from "../../Type/Type";

type Props = {
  transaction: ITransactions;
};

const TransactionRow = ({ transaction }: Props) => {
  return (
    <div className="grid grid-cols-4 items-center py-4 border-b last:border-none">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-200 text-lg">
          {transaction.categoryId[0]}
        </div>
        <span className="font-medium">{transaction.categoryId}</span>
      </div>

      <span className="text-gray-600">{transaction.categoryId}</span>
      <span className="text-gray-600">{transaction.createdAt}</span>

      <span
        className={`text-right font-semibold ${
          transaction.amount > 0 ? "text-teal-600" : "text-red-500"
        }`}
      >
        {transaction.amount > 0 ? "+" : ""}${transaction.amount.toFixed(2)}
      </span>
    </div>
  );
};

export default TransactionRow;
