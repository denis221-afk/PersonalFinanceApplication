import React from "react";
import iconEye from "../../Assets/Icons/eye.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import type { IAuthComponentProps } from "../../Type/PropsTypes";
const FormAuth = ({ title, LinkBtn, mode }: IAuthComponentProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-[560px]">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 mb-2">
            Password
          </label>
          <div className="relative w-full">
            <input
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
