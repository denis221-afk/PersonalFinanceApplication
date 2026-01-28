import React, { useContext, type ReactNode } from "react";
import { useState, createContext } from "react";
interface IProps {
  children: ReactNode;
}
interface IContext {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
const LoadingContext = createContext<IContext | null>(null);
export const ContextLoading = ({ children }: IProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const value = {
    isLoading,
    setIsLoading,
  };
  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw console.log("Error");
  }
  return context;
};
