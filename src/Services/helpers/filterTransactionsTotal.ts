import type { ITransactions } from "../../Type/Type";

export const filterTransactionsTotal = (
  type: string,
  date: number,
  transactions: ITransactions[],
) => {
  return transactions
    .filter((tr) => tr.createdAt > date && tr.type === type)
    .reduce((acc, item) => {
      acc += item.amount;
      return acc;
    }, 0);
};
