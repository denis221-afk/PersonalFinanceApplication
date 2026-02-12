// Services/addTransaction.ts
import { db } from "../Database/firebase";
import { collection, addDoc } from "firebase/firestore";
import type { ITransactions } from "../Type/Type";

export const addTransaction = async (
  transaction: ITransactions,
): Promise<ITransactions> => {
  const docRef = await addDoc(collection(db, "transactions"), transaction);
  return { ...transaction, id: docRef.id };
};
