export const firebaseAuthErrors = {
  "auth/invalid-credential": "Invalid email or password",
  "auth/email-already-in-use": "This email is already registered",
  "auth/invalid-email": "Invalid email format",
  "auth/user-not-found": "User not found",
  "auth/wrong-password": "Incorrect password",
  "auth/weak-password": "Password is too weak (minimum 6 characters)",
  "auth/too-many-requests": "Too many attempts. Please try again later",
  "auth/e": "Something went wrong",
} as const;
