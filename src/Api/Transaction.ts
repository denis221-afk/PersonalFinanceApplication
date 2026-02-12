import type { ITransactions } from "../Type/Type";

const now = Date.now(); // поточний час
const day = 24 * 60 * 60 * 1000; // 1 день у мілісекундах

export const transactions: ITransactions[] = [];
