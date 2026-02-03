import { useEffect } from "react";
import { onIdTokenChanged, type User } from "firebase/auth";
import { auth } from "../Database/firebase";
import { useDispatch } from "react-redux";
import { login, logout } from "../Store/authSlice";
import { useLoading } from "./useContextLoading";

export const useAuthListenerChange = () => {
  const dispatch = useDispatch();
  const { setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(true);

    const unsubscribe = onIdTokenChanged(auth, async (user: User | null) => {
      if (user) {
        const saveUser = {
          email: user.email,
          uid: user.uid,
          displayName: user.displayName || null,
          photoURL: user.photoURL || null,
        };
        dispatch(login(saveUser));
      } else {
        dispatch(logout());
      }

      setIsLoading(false);
    });

    // cleanup при демонті
    return () => unsubscribe();
  }, [dispatch, setIsLoading]);
};
