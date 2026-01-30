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
    const { email, password } = data;
    const displayName = data?.displayName || null;
    heandleFn({ mode, email, password, displayName });
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
            Email
            {errors.email && (
              <AuthFormErrormessenge message={errors.email.message} />
            )}
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
              minLength: {
                value: 5,
                message: "Email must be at least 5 characters long",
              },
              maxLength: {
                value: 50,
                message: "Email must be at most 50 characters long",
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
              Full name
              {errors.email && (
                <AuthFormErrormessenge message={errors.email.message} />
              )}
            </label>
            <input
              {...register("displayName", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 5 characters long",
                },
                maxLength: {
                  value: 50,
                  message: "Name must be at most 50 characters long",
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
            Password
          </label>
          {errors.password && (
            <AuthFormErrormessenge message={errors.password.message} />
          )}
          <div className="relative w-full">
            <input
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                  message:
                    "Password must be at least 8 characters long and contain at least one letter and one number",
                },
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
                maxLength: {
                  value: 20,
                  message: "Password must be at most 20 characters long",
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
          className="w-full cursor-pointer bg-[#201f24] text-white py-2 rounded-md hover:bg-[#201f24dc] transition duration-300"
        >
          {mode === "login" ? "Login" : "Sign Up"}
        </button>
        <p className="mt-4">
          {mode === "login"
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <Link
            to={linkBtnText}
            className="text-gray-500 cursor-pointer hover:underline"
          >
            {mode === "login" ? "Sign Up" : "Login"}
          </Link>
        </p>
      </form>
    </>
  );
};

export default FormAuth;
