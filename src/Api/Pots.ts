import type { IBanks, ITransactions, TUserId } from "./../Type/Type";
const now = Date.now();
const day = 24 * 60 * 60 * 1000; // мілісекунди в одному дні

// Масив транзакцій для акаунту 1
export const transactions1: ITransactions[] = [
  {
    id: "tx-001",
    userId: "bWJJJRTNH9RXWSxH7IvXac7Pi4H3",
    categoryId: "salary",
    type: "income",
    amount: 1500,
    currency: "USD",
    note: "Monthly salary",
    createdAt: now - 2 * day,
    walletId: 1,
  },
  {
    id: "tx-002",
    userId: "bWJJJRTNH9RXWSxH7IvXac7Pi4H3",

    categoryId: "groceries",
    type: "expense",
    amount: 200,
    currency: "USD",
    note: "Supermarket",
    createdAt: now - 1 * day,
    walletId: 1,
  },
];

// Масив транзакцій для акаунту 2
export const transactions2: ITransactions[] = [
  {
    id: "tx-003",
    userId: "bWJJJRTNH9RXWSxH7IvXac7Pi4H3",

    categoryId: "investment",
    type: "income",
    amount: 300,
    currency: "USD",
    note: "Stock dividends",
    createdAt: now - 5 * day,
    walletId: 2,
  },
  {
    id: "tx-004",
    userId: "bWJJJRTNH9RXWSxH7IvXac7Pi4H3",

    categoryId: "entertainment",
    type: "expense",
    amount: 100,
    currency: "USD",
    note: "Cinema",
    createdAt: now - 3 * day,
    walletId: 2,
  },
];

// Масив транзакцій для акаунту 3

// Фейкові банки / фінансові цілі
export const fakeBanks: IBanks[] = [
  {
    id: 1,
    uid: "user-123" as TUserId,
    name: "Emergency Fund",
    targetAmount: 10000,
    currencyAmout: 2500,
    enddata: new Date("2026-12-31").getTime().toString(),
    transactions: transactions1,
    currency: "USD",
    isCompleted: false,
    color: "#FF6B6B",
  },
  {
    id: 2,
    uid: "user-123" as TUserId,
    name: "Travel to Europe",
    targetAmount: 5000,
    currencyAmout: 1500,
    enddata: new Date("2026-08-01").getTime().toString(),
    transactions: transactions2,
    currency: "USD",
    isCompleted: false,
    color: "#4ECDC4",
  },
  {
    id: 3,
    uid: "user-456" as TUserId,
    name: "Buy Car",
    targetAmount: 30000,
    currencyAmout: 10000,
    enddata: new Date("2027-06-30").getTime().toString(),
    transactions: transactions2,
    currency: "USD",
    isCompleted: false,
    color: "#FFD93D",
  },

  {
    id: 4,
    uid: "user-456" as TUserId,
    name: "Buy HOUSE",
    targetAmount: 30000,
    currencyAmout: 10000,
    enddata: new Date("2027-06-30").getTime().toString(),
    transactions: transactions1,
    currency: "USD",
    isCompleted: false,
    color: "#AAD93C",
  },
];
