import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { handleAuthUser } from "../Services/authServices";
import { firebaseAuthErrors } from "../Database/errorMessage.data";

describe("handleAuthUser", () => {
  let fn: any;

  beforeEach(() => {
    fn = vi.fn(); // створюємо мок-функцію перед кожним тестом
  });

  afterEach(() => {
    vi.clearAllMocks(); // очищаємо всі моки після тесту
  });

  it("повертає saveUser при успішному виклику", async () => {
    fn.mockResolvedValue({
      uid: "123",
      email: "test@mail.com",
      displayName: "Denys",
    });

    const result = await handleAuthUser(fn, "test@mail.com", "123456", "Denys");

    expect(result.saveUser).toEqual({
      uid: "123",
      email: "test@mail.com",
      displayName: "Denys",
      photoURL: null,
    });
  });

  it("правильно обробляє displayName = undefined", async () => {
    fn.mockResolvedValue({ uid: "456", email: "user@mail.com" }); // без displayName

    const result = await handleAuthUser(fn, "user@mail.com", "123456");

    expect(result.saveUser).toEqual({
      uid: "456",
      email: "user@mail.com",
      displayName: null,
      photoURL: null,
    });
  });

  it("повертає messenge для відомого коду помилки", async () => {
    fn.mockRejectedValue({ code: "auth/invalid-credential" });

    const result = await handleAuthUser(fn, "test@gmail.com", "1234");

    expect(result.messenge).toBe(firebaseAuthErrors["auth/invalid-credential"]);
  });

  it("повертає fallback messenge для невідомого коду помилки", async () => {
    fn.mockRejectedValue({ code: "unknown-error" });

    const result = await handleAuthUser(fn, "test@gmail.com", "1234");

    expect(result.messenge).toBe(firebaseAuthErrors["auth/e"]);
  });
});
