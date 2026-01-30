import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";
import { auth } from "../Database/firebase";
import { useDispatch } from "react-redux";
import { login } from "../Store/authSlice";
import { useLoading } from "./useContextLoading";
export const useAuthListenerChange = () => {
  const dispatch = useDispatch();
  const { setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        const saveUser: { email: string | null; uid: string | null } = {
          email: user.email,
          uid: user.uid,
        };
        dispatch(login(saveUser));
      }
      setIsLoading(false);
    });

    // cleanup: видаляє слухача при демаунті
    return () => unsubscribe();
  }, [dispatch]);
};
