import { wallets } from "../Api/Wailets";
import { transactions } from "../Api/Transaction";

export const getData = () => {
  return {
    wallets,
    transactions,
  };
};
