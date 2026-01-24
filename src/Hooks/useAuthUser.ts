import { registerUser } from "../Services/RegisterUser";
import { loginUser } from "../Services/LoginUser";
import { useDispatch } from "react-redux";
import { login } from "../Store/auth-slice";
import type { TUser } from "../Type/Type";
export const useAuthUser = () => {
  const dispatch = useDispatch();
  const registerFn = async (email: string, password: string) => {
    const user: TUser = await registerUser(email, password);

    const saveUser: TUser = {
      email: user.email,
      uid: user.uid,
    };
    dispatch(login(saveUser));
  };
  const loginFn = async (email: string, password: string) => {
    const user: TUser = await loginUser(email, password);
    const saveUser: TUser = {
      email: user.email,
      uid: user.uid,
    };
    dispatch(login(saveUser));
  };
  return { registerFn, loginFn };
};
