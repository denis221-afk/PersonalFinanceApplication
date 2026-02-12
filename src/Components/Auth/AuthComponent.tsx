import React from "react";
import HeaderMobile from "../Header/HeaderMobile";
import FormAuth from "../Form/FormAuth";
import LoginBg from "../../Assets/LoginBg.png";
import type { IAuthComponentProps } from "../../Type/propsTypes";

const AuthComponent = ({ mode, title, linkBtnText }: IAuthComponentProps) => {
  if (mode !== "login" && mode !== "signup") {
    throw new Error("Invalid mode prop. Expected 'login' or 'signup'.");
  }
  return (
    <div className="flex">
      <div className="login-images hidden lg:block w-1/2 h-dvh py-2 ro">
        <img
          src={LoginBg}
          alt="Login Background"
          className="w-full h-full object-cover bg-position-center rounded-2xl ml-2"
        />
      </div>
      <div className="flex-1 flex w-full flex-col items-center h-dvh justify-center">
        <HeaderMobile />
        <FormAuth title={title} linkBtnText={linkBtnText} mode={mode} />
      </div>
    </div>
  );
};

export default AuthComponent;
