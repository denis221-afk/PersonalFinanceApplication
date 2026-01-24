import React from "react";
import { useSelector } from "react-redux";

const AppLayout = () => {
  const user = useSelector((state: any) => state.auth.user);

  return <div>{user.email}</div>;
};

export default AppLayout;
