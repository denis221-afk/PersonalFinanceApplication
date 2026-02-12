import React from "react";
import AuthComponent from "../Auth/AuthComponent";
import { Routes, Route } from "react-router-dom";
const AuthLayout = () => {
  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={
            <AuthComponent
              mode="login"
              title="Авторизація"
              linkBtnText="/signup"
            />
          }
        />
        <Route
          path="/signup"
          element={
            <AuthComponent
              mode="signup"
              title="Створити акаунт"
              linkBtnText="/login"
            />
          }
        />
      </Routes>
    </>
  );
};

export default AuthLayout;
