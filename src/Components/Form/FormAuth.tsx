import React from "react";
import iconEye from "../../Assets/Icons/eye.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import type { IAuthComponentProps } from "../../Type/propsTypes";
import { useForm } from "react-hook-form";
import AuthFormErrormessenge from "../ErrorMessage/AuthFormErrorMessage";
import { useAuthUser } from "../../Hooks/useAuthUser";
import Loading from "../Loading/Loading";
interface IFormInput {
  email: string;
  password: string;
  displayName?: string;
}

const FormAuth = ({ title, linkBtnText, mode }: IAuthComponentProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const { isLoading, heandleFn, messenge } = useAuthUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    mode: "onChange",
  });

  async function onSubmit(data: IFormInput) {
    const payload = {
      email: data.email,
      password: data.password,
      displayName: data.displayName || null,
    };
    heandleFn({ mode, ...payload });
  }
  return (
    <>
      <form
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-[560px] relative"
        onSubmit={handleSubmit(onSubmit)}
      >
        {isLoading ? <Loading /> : null}
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Електронна пошта
            {errors.email && (
              <AuthFormErrormessenge message={errors.email.message} />
            )}
          </label>
          <input
            {...register("email", {
              required: "Електронна пошта обов’язкова",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Некоректна електронна пошта",
              },
              minLength: {
                value: 5,
                message: "Електронна пошта має містити щонайменше 5 символів",
              },
              maxLength: {
                value: 50,
                message: "Електронна пошта не має перевищувати 50 символів ",
              },
            })}
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        {mode === "signup" && (
          <div className="mb-4">
            <label htmlFor="displayName">
              Повне імʼя
              {errors.email && (
                <AuthFormErrormessenge message={errors.displayName?.message} />
              )}
            </label>
            <input
              {...register("displayName", {
                required: "Ім’я обов’язкове",
                minLength: {
                  value: 3,
                  message: "Ім’я має містити щонайменше 3 символів",
                },
                maxLength: {
                  value: 50,
                  message: "Ім’я не має перевищувати 50 символів",
                },
              })}
              type="name"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
        )}
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 mb-2">
            Пароль
          </label>
          {errors.password && (
            <AuthFormErrormessenge message={errors.password.message} />
          )}
          <div className="relative w-full">
            <input
              {...register("password", {
                required: "Пароль обов’язковий",
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                  message:
                    "Пароль має містити щонайменше 8 символів, включно з літерою та цифрою",
                },
                minLength: {
                  value: 8,
                  message: "Пароль має містити щонайменше 8 символів",
                },
                maxLength: {
                  value: 20,
                  message: "Пароль не має перевищувати 20 символів",
                },
              })}
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />

            <button
              type="button"
              className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              aria-label="Show password"
              onClick={() => setShowPassword(!showPassword)}
            >
              <img src={iconEye} alt="Show Password" />
            </button>
          </div>
        </div>
        {messenge ? <AuthFormErrormessenge message={messenge} /> : null}

        <button
          disabled={isLoading}
          type="submit"
          className="w-full cursor-pointer bg-[#0F4F4A] text-white py-2 rounded-md hover:bg-[#1F8F7A] transition duration-300"
        >
          {mode === "login" ? "Увійти" : "Зареєструватися"}
        </button>
        <p className="mt-4">
          {mode === "login" ? "Ще не маєш акаунту?" : "Вже є акаунт?"}{" "}
          <Link
            to={linkBtnText}
            className="text-gray-500 cursor-pointer hover:underline"
          >
            {mode === "login" ? "Зареєструйся" : "Увійди"}
          </Link>
        </p>
      </form>
    </>
  );
};

export default FormAuth;
