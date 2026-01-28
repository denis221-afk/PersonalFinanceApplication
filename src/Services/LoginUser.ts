import { auth } from "../Database/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const loginUser = async (email: string, password: string) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password,
  );
  return userCredential.user;
};
