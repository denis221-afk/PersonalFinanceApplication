import type { ITransactions } from "../Type/Type";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
  increment,
} from "firebase/firestore";
import { db } from "../Database/firebase";

type infoWilet = Pick<ITransactions, "walletId" | "amount">;

export const changeWailets = async ({ walletId, amount }: infoWilet) => {
  const q = query(collection(db, "wallets"), where("wid", "==", walletId));
  const snapshot = await getDocs(q);
  if (snapshot.empty) {
    throw new Error("No wallets found with the given wid ID");
  }
  const document = snapshot.docs[0];

  await updateDoc(doc(db, "wallets", document.id), {
    balance: increment(amount),
  });
};
