// -- отримати настроїки summary - отримання даних кошильків - отримання даних транзакцій фільтрація даних
import type { ISummarySettings } from "../Type/Type";
import { getData } from "./getData";
import { daysAgo } from "./helpers/daysAgo";
import { getTotalBalance } from "./helpers/getTotalBalance";
import { filterTransactionsTotal } from "./helpers/filterTransactionsTotal";
export const filteredSummaryData = (Settings: ISummarySettings) => {
  const { wallets, transactions } = getData();
  const { walletId, enddata, days } = Settings;
  if (wallets.length == 0 && transactions.length == 0)
    return {
      totalBalance: null,
      income: null,
      expense: null,
      isEmpty: true,
    };

  let income: number;
  let expense: number;
  const filteredWallets =
    walletId === "all" ? wallets : wallets.filter((w) => w.id === walletId);

  const totalBalance = getTotalBalance(filteredWallets);

  if (enddata === "today") {
    const today = Date.now();
    const t = daysAgo(today, days);
    income = filterTransactionsTotal("income", t, transactions);
    expense = filterTransactionsTotal("expense", t, transactions);
  } else {
    const t = daysAgo(enddata, days);
    income = filterTransactionsTotal("income", t, transactions);
    expense = filterTransactionsTotal("expense", t, transactions);
  }

  return {
    totalBalance: parseFloat(totalBalance.toFixed(2)),
    income: parseFloat(income.toFixed(2)),
    expense: parseFloat(expense.toFixed(2)),
  };
};
