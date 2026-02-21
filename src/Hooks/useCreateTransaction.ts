import { useAppSelector } from "../Store/hooksType";
import { addTransaction } from "../Services/addTransaction";
import { changeWailets } from "../Services/changeWailets";
import { useQueryClient } from "@tanstack/react-query";

interface CreateTransactionData {
  name: string;
  budget: number;
  type: "income" | "expense";
  waillet: number;
}

export const useCreateTransaction = () => {
  const user = useAppSelector((state) => state.auth.user);
  const queryClient = useQueryClient();
  function handleCreateTransaction(data: CreateTransactionData) {
    if (!user) return;
    const transition = {
      userId: user.uid,
      categoryId: data.name,
      type: data.type,
      amount: Number(data.budget),
      currency: "ГРН",
      createdAt: Date.now(),
      walletId: Number(data.waillet),
    };
    addTransaction(transition)
      .then(() => {
        const amount = data.type === "income" ? data.budget : -data.budget;
        changeWailets({
          walletId: transition.walletId,
          amount,
        });
      })
      .then(() => {
        queryClient.invalidateQueries({ queryKey: ["summary"] });
        queryClient.invalidateQueries({ queryKey: ["wailet"] });
        queryClient.invalidateQueries({ queryKey: ["transaction"] });
      })
      .catch((error) => {
        console.error("Error creating transaction:", error);
      });
  }
  return {
    handleCreateTransaction,
  };
};
// прийняти на вхід дані для створення транзакції обробити транзакцію відправити на бек , після я маю перерахувати баланс кощилька і оновити перерахунок всіх балансів і оновити react-query кеш для транзакцій і балансів
