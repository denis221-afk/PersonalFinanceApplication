import { usePots } from "../../../Hooks/usePots";
import Loading from "../../Loading/Loading";

const Pots = () => {
  const { data, isLoading, error } = usePots();

  if (!data?.currentData) {
    return (
      <div className="w-full max-w-3xl bg-[#0F4F4A]/10 backdrop-blur-xl border border-[#0F4F4A]/15 shadow-[0_8px_30px_rgba(15,79,74,0.08)] rounded-xl  p-6  mb-12">
        Дані пусті потрібно добавити банку накопичування
      </div>
    );
  }
  if (error) return <>{error.message}</>;
  console.log(data.currentData);
  return (
    <div className="w-full max-w-3xl bg-[#0F4F4A]/10 backdrop-blur-xl border border-[#0F4F4A]/15 shadow-[0_8px_30px_rgba(15,79,74,0.08)] rounded-xl  p-6  mb-12">
      {isLoading ? <Loading /> : null}
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Кошики</h2>
        <button className="text-sm text-gray-500 hover:text-gray-700">
          Переглянути все →
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Total saved */}
        <div className="flex items-center gap-4 rounded-xl bg-[#0F4F4A] p-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-600">
            $
          </div>
          <div>
            <p className="text-sm text-white">Всього заощаджено</p>
            <p className="text-2xl font-bold text-white">{data.total}$</p>
          </div>
        </div>

        {/* Pots list */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
          {data?.currentData.map((pot) => (
            <div key={pot.id} className="flex items-center gap-3">
              <span
                className={`h-10 w-1 rounded-full`}
                style={{ backgroundColor: pot.color }}
              />
              <div>
                <p className="text-sm text-gray-500">{pot.label}</p>
                <p className="font-semibold text-gray-900">${pot.amount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pots;
