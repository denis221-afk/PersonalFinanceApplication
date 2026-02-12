// -- отримати настроїки summary - отримання даних кошильків - отримання даних транзакцій фільтрація даних
import type { ISummarySettings } from "../Type/Type";
import { getData } from "./getData";
import { daysAgo } from "./helpers/daysAgo";
import { getTotalBalance } from "./helpers/getTotalBalance";
import { filterTransactionsTotal } from "./helpers/filterTransactionsTotal";
export const filteredSummaryData = async (
  Settings: ISummarySettings,
  userId: string,
) => {
  const { getWallets, getTransactions } = getData(userId);
  const { walletId, enddata, days } = Settings;
  const wallets = await getWallets();
  const transactions = await getTransactions();
  if (Array.isArray(wallets) == false || Array.isArray(transactions) == false)
    throw new Error("Invalid data format");

  if (wallets.length == 0 || transactions.length == 0)
    return {
      totalBalance: null,
      income: null,
      expense: null,
      isEmpty: true,
    };

  let income: number;
  let expense: number;
  const filteredWallets =
    walletId === "all" ? wallets : wallets.filter((w) => w.wid === walletId);

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
  income = income || 0;
  expense = expense || 0;

  return {
    totalBalance: totalBalance,
    income: income,
    expense: expense,
    isEmpty: false,
  };
};
