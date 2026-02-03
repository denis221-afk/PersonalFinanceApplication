import type { IWallets } from "../../Type/Type";
export function getTotalBalance(w: IWallets[]): number {
  const totalBlance = w.reduce((acc, wallet) => {
    acc += wallet.balance;
    return acc;
  }, 0);

  return totalBlance;
}
