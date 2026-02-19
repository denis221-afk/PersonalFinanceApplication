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

export const changeWailets = async (willetId: number, newBalance: number) => {
  const q = query(collection(db, "wallets"), where("wid", "==", willetId));
  const snapshot = await getDocs(q);
  if (snapshot.empty) {
    throw new Error("No wallets found with the given wid ID");
  }
  const document = snapshot.docs[0];

  await updateDoc(doc(db, "wallets", document.id), {
    balance: increment(newBalance),
  });
};
