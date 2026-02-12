import React from "react";
import { useForm } from "react-hook-form";
import { useCreateWeile } from "../../../Hooks/useCreateWeilets";
import AuthFormErrorMessage from "../../ErrorMessage/AuthFormErrorMessage";
interface AddBudgetModalProps {
  onClose: () => void;
}
interface IFormInput {
  name: string;
  total: number;
}

export const AddBudgetModal = ({ onClose }: AddBudgetModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    mode: "onChange",
  });
  const { handleWalletCreationFlow } = useCreateWeile();

  function onSubmit(data: IFormInput): void {
    handleWalletCreationFlow(data);
    onClose();
  }
  return (
    <div className="rounded-2xl bg-white p-6 shadow-xl">
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Добавти новий кошильок
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Добавти новий кошильок щоб управляти своїми бюджетами
          </p>
        </div>

        <button
          onClick={onClose}
          className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
        >
          ✕
        </button>
      </div>

      {/* Form */}
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {/* Category */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Нзава кошилька
          </label>
          {errors ? (
            <AuthFormErrorMessage message={errors.name?.message} />
          ) : null}
          <input
            {...register("name", {
              required: "Це поле обовязкове",
              minLength: {
                message: "Мініміальна кількісь символів 4",
                value: 4,
              },
            })}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-gray-900 focus:outline-none"
          />
        </div>

        {/* Max Spend */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Бюджет кошилька
          </label>
          {errors ? (
            <AuthFormErrorMessage message={errors.total?.message} />
          ) : null}
          <input
            {...register("total", {
              required: "Це поле обовязкове",
              minLength: {
                message: "мінімальна кількісь символів 2",
                value: 2,
              },
            })}
            type="number"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-gray-900 focus:outline-none"
          />
        </div>

        {/* Theme */}

        {/* Button */}
        <button
          type="submit"
          className="mt-2 w-full rounded-xl bg-[#0F4F4A] py-3 text-sm font-semibold text-white hover:bg-[#1a7e76] transition"
        >
          Add Budget
        </button>
      </form>
    </div>
  );
};
