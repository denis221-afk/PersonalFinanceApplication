import type { IUser } from "../Type/Type";
import { firebaseAuthErrors } from "../Database/errorMessage.data";
import type { IFirebaseError } from "../Type/Type";
export const handleAuthUser = async (
  fn: (email: string, password: string, name?: string) => Promise<IUser>,
  email: string,
  password: string,
  name?: string,
) => {
  try {
    const user = await fn(email, password, name);
    const saveUser: IUser = {
      email: user.email,
      uid: user.uid,
      displayName: user?.displayName || null,
      photoURL: user.photoURL ?? null,
    };

    return { saveUser };
  } catch (e: unknown) {
    const error = e as IFirebaseError;
    return {
      messenge: firebaseAuthErrors[error.code] || firebaseAuthErrors["auth/e"],
    };
  }
};



