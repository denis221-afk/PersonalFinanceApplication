import { useDispatch } from "react-redux";
import { login } from "../Store/authSlice";
import type { AppDispatch } from "../Store";
import { handleAuthUser } from "../Services/authServices";
import { registerUser } from "../Services/registerUser";
import { loginUser } from "../Services/loginUser";
import { useState } from "react";
import type { TUserInfo } from "../Type/Type";
export const useAuthUser = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsLoading] = useState(false);
  const [messenge, setMessenge] = useState("");

  async function heandleFn(userInfo: TUserInfo) {
    const { mode, email, password } = userInfo;
    const displayName = userInfo?.displayName || undefined;
    setIsLoading(true);
    const res =
      mode === "login"
        ? await handleAuthUser(loginUser, email, password).finally(() =>
            setIsLoading(false),
          )
        : await handleAuthUser(
            registerUser,
            email,
            password,
            displayName,
            
          ).finally(() => setIsLoading(false));

    if (res?.saveUser) {
      console.log(res.saveUser);
      dispatch(login(res.saveUser));
    } else if (res?.messenge) {
      setMessenge(res.messenge);
    }
  }

  return {
    isLoading,
    heandleFn,
    messenge: messenge,
  };
};
