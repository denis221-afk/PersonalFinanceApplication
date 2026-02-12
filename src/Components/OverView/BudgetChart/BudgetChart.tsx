import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useGetWailets } from "../../../Hooks/useGetWailets";

const BudgetChart = () => {
  const { wailets, isLoading, isError } = useGetWailets();
  if (isLoading) return <>Завантажиння</>;
  if (!wailets || isError)
    return (
      <div
        className="w-full max-w-3xl rounded-2xl p-6
        bg-[#0F4F4A]/10 backdrop-blur-xl
        border border-[#0F4F4A]/15
        shadow-[0_8px_30px_rgba(15,79,74,0.08)]"
      >
        щось пішло не так
      </div>
    );
  if (wailets.length === 0)
    return (
      <div
        className="w-full max-w-3xl rounded-2xl p-6
        bg-[#0F4F4A]/10 backdrop-blur-xl
        border border-[#0F4F4A]/15
        shadow-[0_8px_30px_rgba(15,79,74,0.08)]"
      >
        Добавти Кошильки
      </div>
    );
  return (
    <div
      className="
        w-full max-w-3xl rounded-2xl p-6
        bg-[#0F4F4A]/10 backdrop-blur-xl
        border border-[#0F4F4A]/15
        shadow-[0_8px_30px_rgba(15,79,74,0.08)]
      "
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-[#0F4F4A]">Кошильки</h2>
          <p className="text-sm text-[#0F4F4A]/70"></p>
        </div>
        <button className="text-sm font-medium text-[#0F4F4A]/80 hover:underline">
          Деталі →
        </button>
      </div>

      {/* Chart */}
      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={wailets}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(15,79,74,0.1)" />
            <XAxis dataKey="name" tick={{ fill: "#22aa9f", fontSize: 12 }} />
            <YAxis tick={{ fill: "#22aa9f", fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(255,255,255,0.9)",
                borderRadius: "8px",
                border: "1px solid rgba(15,79,74,0.15)",
              }}
            />

            <Bar
              dataKey="balance"
              fill="#22aa9f"
              name="Баланс"
              style={{ boxShadow: "none" }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-4 text-sm text-[#0F4F4A]/80">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded bg-[#22aa9f]" />
          Баланс
        </div>
      </div>
    </div>
  );
};

export default BudgetChart;
