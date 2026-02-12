// filteredSummaryData.test.ts
import { describe, it, expect, beforeEach, vi } from "vitest";
import { filteredSummaryData } from "../Services/filteredSummaryData";

// Мокаємо модулі
vi.mock("../Services/getData", () => ({
  getData: vi.fn(),
}));

vi.mock("../Services/helpers/daysAgo", () => ({
  daysAgo: vi.fn(),
}));

vi.mock("../Services/helpers/getTotalBalance", () => ({
  getTotalBalance: vi.fn(),
}));

vi.mock("../Services/helpers/filterTransactionsTotal", () => ({
  filterTransactionsTotal: vi.fn(),
}));

// Імпортуємо мокнуті функції
import { getData } from "../Services/getData";
import { daysAgo } from "../Services/helpers/daysAgo";
import { getTotalBalance } from "../Services/helpers/getTotalBalance";
import { filterTransactionsTotal } from "../Services/helpers/filterTransactionsTotal";

describe("filteredSummaryData", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("повертає isEmpty, якщо немає wallets і transactions", () => {
    (getData as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      wallets: [],
      transactions: [],
    });

    const result = filteredSummaryData({
      walletId: "all",
      enddata: "today",
      days: 7,
    });

    expect(result).toEqual({
      totalBalance: null,
      income: null,
      expense: null,
      isEmpty: true,
    });
  });

  it("працює для walletId='all'", () => {
    (getData as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      wallets: [
        { id: "1", balance: 100 },
        { id: "2", balance: 200 },
      ],
      transactions: [{ id: "t1", amount: 50, type: "income" }],
    });
    (getTotalBalance as unknown as ReturnType<typeof vi.fn>).mockReturnValue(
      300,
    );
    (daysAgo as unknown as ReturnType<typeof vi.fn>).mockReturnValue(0);
    (
      filterTransactionsTotal as unknown as ReturnType<typeof vi.fn>
    ).mockReturnValue(50);

    const result = filteredSummaryData({
      walletId: "all",
      enddata: "today",
      days: 7,
    });

    expect(result).toEqual({
      totalBalance: 300,
      income: 50,
      expense: 50,
      isEmpty: false,
    });
  });

  it("працює для конкретного walletId", () => {
    (getData as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      wallets: [
        { id: "1", balance: 100 },
        { id: "2", balance: 200 },
      ],
      transactions: [{ id: "t1", amount: 50, type: "income" }],
    });
    (getTotalBalance as unknown as ReturnType<typeof vi.fn>).mockReturnValue(
      100,
    );
    (daysAgo as unknown as ReturnType<typeof vi.fn>).mockReturnValue(0);
    (
      filterTransactionsTotal as unknown as ReturnType<typeof vi.fn>
    ).mockReturnValue(50);

    const result = filteredSummaryData({
      walletId: 1,
      enddata: "today",
      days: 7,
    });

    expect(result).toEqual({
      totalBalance: 100,
      income: 50,
      expense: 50,
      isEmpty: false,
    });
  });

  it("працює для enddata != 'today'", () => {
    (getData as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      wallets: [{ id: "1", balance: 100 }],
      transactions: [{ id: "t1", amount: 50, type: "income" }],
    });
    (getTotalBalance as unknown as ReturnType<typeof vi.fn>).mockReturnValue(
      100,
    );
    (daysAgo as unknown as ReturnType<typeof vi.fn>).mockReturnValue(0);
    (
      filterTransactionsTotal as unknown as ReturnType<typeof vi.fn>
    ).mockReturnValue(50);

    const endTimestamp = Date.now() - 5 * 24 * 60 * 60 * 1000;

    const result = filteredSummaryData({
      walletId: 1,
      enddata: endTimestamp,
      days: 7,
    });

    expect(result).toEqual({
      totalBalance: 100,
      income: 50,
      expense: 50,
      isEmpty: false,
    });
  });

  it("округлює числа до 2 знаків після коми", () => {
    (getData as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      wallets: [{ id: "1", balance: 123.456 }],
      transactions: [{ id: "t1", amount: 78.901, type: "income" }],
    });
    (getTotalBalance as unknown as ReturnType<typeof vi.fn>).mockReturnValue(
      123.456,
    );
    (daysAgo as unknown as ReturnType<typeof vi.fn>).mockReturnValue(0);
    (
      filterTransactionsTotal as unknown as ReturnType<typeof vi.fn>
    ).mockReturnValue(78.901);

    const result = filteredSummaryData({
      walletId: 1,
      enddata: "today",
      days: 7,
    });

    expect(result.totalBalance).toBeCloseTo(123.46, 2);
    expect(result.income).toBeCloseTo(78.9, 2);
  });

  it("повертає income=0 та expense=0, якщо транзакцій за період немає", () => {
    // Мокаємо getData з кошиками, але без транзакцій
    (getData as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      wallets: [
        { id: "1", balance: 100 },
        { id: "2", balance: 200 },
      ],
      transactions: [], // транзакцій немає
    });

    // Мокаємо дні
    (daysAgo as unknown as ReturnType<typeof vi.fn>).mockReturnValue(0);

    // Мокаємо суму по кошиках
    (getTotalBalance as unknown as ReturnType<typeof vi.fn>).mockReturnValue(
      300,
    );

    // Мокаємо транзакції, які повертають 0
    (
      filterTransactionsTotal as unknown as ReturnType<typeof vi.fn>
    ).mockReturnValue(0);

    const result = filteredSummaryData({
      walletId: "all",
      enddata: "today",
      days: 7,
    });

    expect(result).toEqual({
      totalBalance: 300, // сума кошиків
      income: 0, // нема доходів
      expense: 0, // нема витрат
      isEmpty: false, // кошики є, транзакцій немає
    });
  });
});
