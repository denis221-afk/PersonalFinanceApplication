const Filters = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
      <input
        type="text"
        placeholder="Search transaction"
        className="w-full md:w-72 px-4 py-2 border border-[#0F4F4A]  rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F4F4A]"
      />

      <div className="flex gap-3">
        <select className="px-4 py-2 border border-[#0F4F4A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F4F4A]">
          <option>Витрати</option>
          <option>Доходи</option>
        </select>

        <select className="px-4 py-2 border border-[#0F4F4A]  rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F4F4A]">
          <option>Всі Транзакції</option>
          <option>Головні</option>
          <option>Витрати на їду</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
