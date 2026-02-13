import type { ITransactions } from "../../Type/Type";
import TransactionRow from "./TransactionRow";
import TransactionCard from "./TransactionCard";

type Props = {
  transactions: ITransactions[];
};

const TransactionTable = ({ transactions }: Props) => {
  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block">
        <div className="grid grid-cols-4 text-sm text-gray-500 pb-3 border-b">
          <span>Recipient / Sender</span>
          <span>Category</span>
          <span>Transaction Date</span>
          <span className="text-right">Amount</span>
        </div>

        {transactions.map((tx) => (
          <TransactionRow key={tx.id} transaction={tx} />
        ))}
      </div>

      {/* Mobile */}
      <div className="md:hidden space-y-4">
        {transactions.map((tx) => (
          <TransactionCard key={tx.id} transaction={tx} />
        ))}
      </div>
    </>
  );
};

export default TransactionTable;
