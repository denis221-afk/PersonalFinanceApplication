import React from "react";
import { useSelector } from "react-redux";

const AppLayout = () => {
  const user = useSelector((state: any) => state.auth.user);
  console.log(user);

  return <div>{user.displayName}</div>;
};

export default AppLayout;
