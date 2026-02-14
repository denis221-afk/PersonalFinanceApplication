import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { useGetWailets } from "../../../Hooks/useGetWailets";

const COLORS = ["#22aa9f", "#0F4F4A", "#6FD3C8", "#A7F3D0", "#134E4A"];

const BudgetChart = () => {
  const { wailets, isLoading, isError } = useGetWailets();

  if (isLoading) return <>Завантаження...</>;

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
        Додайте кошильки
      </div>
    );

  return (
    <div
      className="w-full max-w-3xl rounded-2xl p-6
      bg-[#0F4F4A]/10 backdrop-blur-xl
      border border-[#0F4F4A]/15
      shadow-[0_8px_30px_rgba(15,79,74,0.08)]"
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-[#0F4F4A]">
          Розподіл балансу
        </h2>
        <button className="text-sm font-medium text-[#0F4F4A]/80 hover:underline">
          Деталі →
        </button>
      </div>

      {/* Chart */}
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={wailets}
              dataKey="balance"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              innerRadius={60} // робимо donut
              paddingAngle={3}
            >
              {wailets.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(255,255,255,0.95)",
                borderRadius: "8px",
                border: "1px solid rgba(15,79,74,0.15)",
              }}
            />

            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BudgetChart;
