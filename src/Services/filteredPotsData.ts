import { getData } from "./getData";

type TFilteredPotsResult =
  | {
      status: "isEmpty";
      isEmpty: true;
      total: 0;
      currentData: null;
    }
  | {
      status: "success";
      isEmpty: false;
      total: number;
      currentData: {
        id: number;
        label: string;
        amount: number;
        color: string;
      }[];
    };

export const filteredPotsData = (): TFilteredPotsResult => {
  const { fakeBanks } = getData();

  if (!fakeBanks || fakeBanks.length === 0)
    return { status: "isEmpty", isEmpty: true, total: 0, currentData: null };

  const total = fakeBanks.reduce((acc, bank) => {
    acc += bank.currencyAmout;
    return acc;
  }, 0);

  const currentData = [...fakeBanks]
    .sort((a, b) => (b.currencyAmout ?? 0) - (a.currencyAmout ?? 0))
    .slice(0, 4)
    .map((item) => {
      const { name, currencyAmout, color, id } = item;

      return { id, label: name, amount: currencyAmout, color };
    });

  return {
    status: "success",
    isEmpty: false,
    total,
    currentData,
  };
};
