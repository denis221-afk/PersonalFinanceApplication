import { useGetTransactiontsts } from "../../Hooks/useGetTransaction";
const TransactionsList = () => {
  const { data, isLoading, isError } = useGetTransactiontsts();

  if (!data)
    return (
      <div className="rounded-xl  p-5 bg-[#0F4F4A]/10 backdrop-blur-xl border border-[#0F4F4A]/15 shadow-[0_8px_30px_rgba(15,79,74,0.08)]">
        Щось пішло не так
      </div>
    );
  if (data.length == 0)
    return (
      <div className="rounded-xl  p-5 bg-[#0F4F4A]/10 backdrop-blur-xl border border-[#0F4F4A]/15 shadow-[0_8px_30px_rgba(15,79,74,0.08)]">
        Добавти транзакцій
      </div>
    );
  const getColorFrom = () => {
    const r = Math.floor(Math.random() * 156 + 50);
    const g = Math.floor(Math.random() * 156 + 50);
    const b = Math.floor(Math.random() * 156 + 50);

    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <div className="rounded-xl  p-5 bg-[#0F4F4A]/10 backdrop-blur-xl border border-[#0F4F4A]/15 shadow-[0_8px_30px_rgba(15,79,74,0.08)]">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Транзакції</h2>
        <button className="text-sm text-gray-500 hover:text-gray-900">
          Переглянути все →
        </button>
      </div>

      {/* List */}
      <div className="space-y-4">
        {data
          .sort((a, b) => b.createdAt - a.createdAt)
          .slice(0, 6)
          .map((tx) => {
            const title = tx.note ?? tx.categoryId;
            const firstLetter = title.charAt(0).toUpperCase();

            return (
              <div key={tx.id} className="flex items-center justify-between">
                {/* Left */}
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white"
                    style={{ backgroundColor: getColorFrom() }}
                  >
                    {firstLetter}
                  </div>

                  {/* Title */}
                  <p className="text-sm font-medium text-gray-900">{title}</p>
                </div>

                {/* Right */}
                <div className="text-right">
                  <p
                    className={`text-sm font-semibold ${
                      tx.type === "income"
                        ? "text-emerald-600"
                        : "text-gray-900"
                    }`}
                  >
                    {tx.type === "income" ? "+" : "-"}
                    {tx.amount.toFixed(2)} {tx?.currency}
                  </p>

                  <p className="text-xs text-gray-400">
                    {new Date(tx.createdAt).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TransactionsList;
