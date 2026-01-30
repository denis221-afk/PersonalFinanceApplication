import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { handleAuthUser } from "../Services/authServices";
import { registerUser } from "../Services/registerUser";
import { loginUser } from "../Services/loginUser";
import { firebaseAuthErrors } from "../Database/errorMessage.data";

vi.mock("../Services/registerUser");
vi.mock("../Services/loginUser");

describe("Firebase auth services", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("registerUser повертає користувача", async () => {
    (registerUser as any).mockResolvedValue({
      uid: "123",
      email: "test@mail.com",
      displayName: "Denys",
    });

    const result = await handleAuthUser(
      registerUser,
      "test@mail.com",
      "123456",
      "Denys",
    );

    expect(result.saveUser).toEqual({
      uid: "123",
      email: "test@mail.com",
      displayName: "Denys",
      photoURL: null,
    });
  });

  it("loginUser повертає користувача", async () => {
    (loginUser as any).mockResolvedValue({
      uid: "456",
      email: "user@mail.com",
      displayName: "User",
    });

    const result = await handleAuthUser(loginUser, "user@mail.com", "123456");

    expect(result.saveUser).toEqual({
      uid: "456",
      email: "user@mail.com",
      displayName: "User",
      photoURL: null,
    });
  });

  it("registerUser кидає помилку", async () => {
    (registerUser as any).mockRejectedValue({ code: "auth/invalid-email" });

    const result = await handleAuthUser(
      registerUser,
      "bad@mail",
      "1234",
      "Denys",
    );

    expect(result.messenge).toBe(firebaseAuthErrors["auth/invalid-email"]);
  });
});
