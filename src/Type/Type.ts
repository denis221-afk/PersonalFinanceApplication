import { firebaseAuthErrors } from "../Database/errorMessage.data";
export type TAuthMode = "login" | "signup";
export type TDisplayName = string | null;
export type TUserId = string;

export interface IUser {
  uid: TUserId;
  email: string | null;
  displayName?: TDisplayName;
  defaultCurrency?: string;
  photoURL: string | null;
}

// user for Auth
export type TUserInfo = {
  mode: TAuthMode;
  email: string;
  password: string;
  displayName?: TDisplayName;
};

export interface IFirebaseError extends Error {
  code: keyof typeof firebaseAuthErrors;
}

export interface IWallets {
  wid: number | string;
  userId: TUserId;
  balance: number;
  name: string;
  currency: string;
  transactions?: ITransactions[];
}

export interface ITransactions {
  id: number | string;
  userId: TUserId;
  categoryId: string;
  type: "income" | "expense";
  amount: number;
  currency: string;
  note?: string;
  createdAt: number;
  walletId: number | string;
}

export interface IPots {
  id: string;
  userId: TUserId;
  categoryId: string;
  limit: number;
  spent: number;
  startDate: number;
  endDate: number;
}

export interface ISummary {
  totalBalance: number | null | undefined;
  income: number | null | undefined;
  expense: number | null | undefined;
  isEmpty?: boolean;
}

export interface ISummarySettings {
  walletId: number | "all";
  days: number;
  enddata: number | "today";
}

export interface IBanks {
  id: number;
  uid: TUserId;
  name: string;
  targetAmount: number | null;
  currencyAmout: number;
  enddata?: string;
  transactions: ITransactions[];
  currency: string | "USD";
  isCompleted: boolean;
  color: string;
}

export interface IFormInputWailets {
  name: string;
  total: number;
}
