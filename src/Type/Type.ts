import { firebaseAuthErrors } from "../Database/errorMessage.data";
export type TAuthMode = "login" | "signup";
export type TDisplayName = string | null;

export interface IUser {
  uid: string;
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
  id: number;
  uid: number;
  balance: number;
  name: string;
  currency: string;
}

export interface ITransactions {
  id: string;
  userId: string;
  accountId: string;
  categoryId: string;
  type: "income" | "expense";
  amount: number;
  currency: string;
  note?: string;
  createdAt: number;
}

export interface Budget {
  id: string;
  userId: string;
  categoryId: string;
  limit: number;
  spent: number;
  startDate: number;
  endDate: number;
}
