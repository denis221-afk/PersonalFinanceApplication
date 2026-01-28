import { registerUser } from "../Services/RegisterUser";
import { loginUser } from "../Services/LoginUser";
import { useDispatch } from "react-redux";
import { login } from "../Store/auth-slice";
import type { TUser } from "../Type/Type";

export const useAuthUser = () => {
  const dispatch = useDispatch();

  const registerFn = async (email: string, password: string) => {
    try {
      const user: TUser = await registerUser(email, password);

      const saveUser: TUser = {
        email: user.email,
        uid: user.uid,
      };
      dispatch(login(saveUser));
    } catch (e) {
      throw e;
    }
  };

  const loginFn = async (email: string, password: string) => {
    try {
      const user: TUser = await loginUser(email, password);
      const saveUser: TUser = {
        email: user.email,
        uid: user.uid,
      };
      dispatch(login(saveUser));
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  return { registerFn, loginFn };
};

/* 
- Яку логіку це сервіс має виконувати 
получає - дані із сервера - формує обєкт користувача і повиртає сам обєкт і status 
користувач водить дані email і password потім - 
  1. показується загрузка 
  2. Користувач потрабляє на головну сторінку 
  // 
  3. Користувач отримує повідомлиння про помилку 
  4. Форма очищається

  дані = email uid | помилка повідомлиння 

  

*/


