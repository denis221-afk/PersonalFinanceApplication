import type { ITransactions } from "../../Type/Type";

type Props = {
  transaction: ITransactions;
};

const TransactionCard = ({ transaction }: Props) => {
  return (
    <div className="border rounded-xl p-4 shadow-sm flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-200 text-lg">
          {transaction.categoryId[0]}
        </div>
        <div>
          <p className="font-medium">{transaction.categoryId}</p>
          <p className="text-sm text-gray-500">{transaction.categoryId}</p>
        </div>
      </div>

      <div className="flex justify-between text-sm text-gray-500">
        <span>{transaction.createdAt}</span>
        <span
          className={`font-semibold ${
            transaction.amount > 0 ? "text-teal-600" : "text-red-500"
          }`}
        >
          {transaction.amount > 0 ? "+" : ""}${transaction.amount.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default TransactionCard;
