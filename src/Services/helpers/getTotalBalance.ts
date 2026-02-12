import type { IWallets } from "../../Type/Type";
export function getTotalBalance(w: IWallets[]): number {
  const totalBlance = w.reduce(
    (acc, wallet) => acc + Number(wallet.balance),
    0,
  );

  return totalBlance;
}
