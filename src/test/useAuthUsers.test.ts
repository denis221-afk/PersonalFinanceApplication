import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { useAuthUser } from "../Hooks/useAuthUser";
import { handleAuthUser } from "../Services/authServices";
import { login } from "../Store/authSlice";

// Мокаємо handleAuthUser
vi.mock("../Services/authServices", () => ({
  handleAuthUser: vi.fn(),
}));

// Мокаємо Redux dispatch
const dispatchMock = vi.fn();

// Мокаємо useDispatch
vi.mock("react-redux", () => ({
  useDispatch: () => dispatchMock,
}));

describe("useAuthUser hook", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("повертає saveUser і викликає dispatch при успіху", async () => {
    (handleAuthUser as any).mockResolvedValue({
      saveUser: {
        uid: "123",
        email: "test@mail.com",
        displayName: "Denys",
        photoURL: null,
      },
    });

    const { result } = renderHook(() => useAuthUser());

    await act(async () => {
      await result.current.heandleFn({
        mode: "login",
        email: "test@mail.com",
        password: "123456",
      });
    });

    expect(dispatchMock).toHaveBeenCalledWith(
      login({
        uid: "123",
        email: "test@mail.com",
        displayName: "Denys",
        photoURL: null,
      }),
    );
    expect(result.current.isLoading).toBe(false);
    expect(result.current.messenge).toBe("");
  });

  it("встановлює messenge при помилці", async () => {
    (handleAuthUser as any).mockResolvedValue({
      messenge: "Invalid email or password",
    });

    const { result } = renderHook(() => useAuthUser());

    await act(async () => {
      await result.current.heandleFn({
        mode: "login",
        email: "test@mail.com",
        password: "wrong",
      });
    });

    expect(dispatchMock).not.toHaveBeenCalled();
    expect(result.current.messenge).toBe("Invalid email or password");
    expect(result.current.isLoading).toBe(false);
  });
});
