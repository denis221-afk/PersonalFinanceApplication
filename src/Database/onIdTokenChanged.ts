import { onIdTokenChanged } from "firebase/auth";
import type { Auth } from "firebase/auth";

export const initAuthListener = (auth: Auth) => {
  onIdTokenChanged(auth, async (user) => {
    if (!user) {
      // logout
      return;
    }

    const token = await user.getIdToken();
    // 🔥 тут ОНОВЛЮЄШ store / axios / state
  });
};
