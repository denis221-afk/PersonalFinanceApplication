// Services/addWallet.ts
import { db } from "../Database/firebase";
import { collection, addDoc } from "firebase/firestore";
import type { IWallets } from "../Type/Type";

export const addWallet = async (wallet: IWallets): Promise<IWallets> => {
  const docRef = await addDoc(collection(db, "wallets"), wallet);
  return { ...wallet }; // повертаємо з id Firebase
};
