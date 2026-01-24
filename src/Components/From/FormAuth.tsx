import React from "react";
import iconEye from "../../Assets/Icons/eye.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import type { IAuthComponentProps } from "../../Type/PropsTypes";
import { useForm } from "react-hook-form";
import AuthFormErrorMasenge from "../ErrorMasenge/AuthFormErrorMasenge";
import { useAuthUser } from "../../Hooks/useAuthUser";
const FormAuth = ({ title, LinkBtn, mode }: IAuthComponentProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const { registerFn, loginFn } = useAuthUser();
  interface IFormInput {
    email: string;
    password: string;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    mode: "onChange",
  });

  function onSubmit(data: IFormInput) {
    if (mode === "login") {
      loginFn(data.email, data.password);
    }
    registerFn(data.email, data.password);
  }
  return (
    <>
      <form
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-[560px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email
            {errors.email && (
              <AuthFormErrorMasenge message={errors.email.message} />
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
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 mb-2">
            Password
          </label>
          {errors.password && (
            <AuthFormErrorMasenge message={errors.password.message} />
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
        <button
          type="submit"
          className="w-full cursor-pointer bg-[#201f24] text-white py-2 rounded-md hover:bg-[#201f24dc] transition duration-300"
        >
          Login
        </button>
        <p className="mt-4">
          {mode === "login"
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <Link
            to={LinkBtn}
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
