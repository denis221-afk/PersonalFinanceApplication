import React from "react";

const AuthFormErrorMasenge = ({ message }: { message: string | undefined }) => {
  return <p className="text-red-500 text-sm mt-1">{message}</p>;
};

export default AuthFormErrorMasenge;
