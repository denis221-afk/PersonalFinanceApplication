import { auth } from "../Database/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export const registerUser = async (
  email: string,
  password: string,
  displayName: string | undefined,
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;
    await updateProfile(user, { displayName: displayName, photoURL: "" });

    return user;
  } catch (error) {
    throw error;
  }
};
