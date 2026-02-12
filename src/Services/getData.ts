import { db } from "../Database/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import type { IWallets, ITransactions } from "../Type/Type";

export const getData = (userId: string) => {
  const getWallets = async (): Promise<IWallets[]> => {
    const q = query(collection(db, "wallets"), where("userId", "==", userId));
    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => ({ ...doc.data() }) as IWallets);
  };
  const getTransactions = async (): Promise<ITransactions[]> => {
    const q = query(
      collection(db, "transactions"),
      where("userId", "==", userId),
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(
      (doc) => ({ ...doc.data(), id: doc.id }) as ITransactions,
    );
  };

  return {
    getWallets,
    getTransactions,
  };
};
