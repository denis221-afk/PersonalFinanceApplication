import type { IFormInputWailets, IWallets, ITransactions } from "../Type/Type";
import { useAppSelector } from "../Store/hooksType";
import { addWallet } from "../Services/addWailets";
import { addTransaction } from "../Services/addTransaction";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateWeile = () => {
  const user = useAppSelector((state) => state?.auth.user);
  const queryClient = useQueryClient();
  const wailetMutation = useMutation({
    mutationFn: (wailet: IWallets) => addWallet(wailet),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["summary"] });
      queryClient.invalidateQueries({ queryKey: ["wailet"] });
    },
  });

  const transitionMutation = useMutation({
    mutationFn: (transition: Omit<ITransactions, "id">) =>
      addTransaction(transition),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transaction"] });
    },
  });

  async function handleWalletCreationFlow(data: IFormInputWailets) {
    if (!user) return;
    const Wailet: IWallets = {
      wid: Math.random() * 2000,
      userId: user?.uid,
      balance: Number(data.total),
      name: data.name,
      currency: "ГРН",
    };
    const transition: Omit<ITransactions, "id"> = {
      userId: user.uid,
      categoryId: "поповниння кошилька",
      type: "income",
      amount: Number(data.total),
      currency: "ГРН",
      createdAt: Date.now(),
      walletId: Wailet.wid,
    };

    await wailetMutation.mutateAsync(Wailet);
    await transitionMutation.mutateAsync(transition);
  }

  return {
    handleWalletCreationFlow,
  };
};

// приймає форму - відправляє форму на сервіс створиння кошилька - створює транзакцію - оновляє підписки очищає і виключає модалбне вікно
