import React, { useEffect, useState } from "react";
import { getData } from "../../../Services/getData";
import { useAppSelector } from "../../../Store/hooksType";
import type { IWallets } from "../../../Type/Type";
import { useForm } from "react-hook-form";
interface IProps {
  onClose: () => void;
}
interface IFormInput {
  name: string;
  budget: number;
  type: "income" | "expense";
  waillet: number;
}

const TransactionModal = ({ onClose }: IProps) => {
  const user = useAppSelector((state) => state.auth.user);
  if (!user) return;
  const { getWallets } = getData(user?.uid);
  const [wallets, setWaillets] = useState<IWallets[] | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    mode: "onChange",
  });

  useEffect(() => {
    async function getFetch() {
      const w = await getWallets();
      setWaillets(w);
    }
    getFetch();
  }, []);

  function onSubmit(data: IFormInput) {
    console.log(data);
  }
  return (
    <div className="rounded-2xl bg-white p-6 shadow-xl">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Добавти нову транзакцію
          </h2>
        </div>
        <button
          className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
      {/* Form */}
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {/* Category */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Нзава транзакцій
          </label>

          <input
            {...register("name", {
              required: "Це поле обовязвови",
              minLength: {
                value: 4,
                message: "Мінімальна кількість символів",
              },
            })}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-gray-900 focus:outline-none"
          />
        </div>

        {/* Max Spend */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Бюджет транзакцій
          </label>

          <input
            type="number"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-gray-900 focus:outline-none"
            {...register("budget", {
              required: "Це поле обовязвови",
            })}
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            тип транзакцій
          </label>

          <select
            {...register("type", {
              required: "Це поле обовязвови",
            })}
            className="px-4 py-2 border border-[#0F4F4A] w-1/2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F4F4A]"
          >
            <option value={"income"}>Витрати</option>
            <option value={"expense"}>Доходи</option>
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            вибирить кошильок з яким відбудиться транзакція
          </label>

          <select
            {...register("waillet", {
              required: "Це поле обовязвови",
            })}
            className="px-4 py-2 border border-[#0F4F4A] w-1/2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F4F4A]"
          >
            {wallets?.map((w) => {
              return (
                <option value={w.wid} key={w.wid}>
                  {w.name}
                </option>
              );
            })}
          </select>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="mt-2 w-full rounded-xl bg-[#0F4F4A] py-3 text-sm font-semibold text-white hover:bg-[#1a7e76] transition"
        >
          добавити транзакцію
        </button>
      </form>
    </div>
  );
};

export default TransactionModal;

/* Поле для катигорій таранзакцій - поли де вибирати кошильок - поле де вибирати типи  поле для балансу кнопка педтвирджиння */
