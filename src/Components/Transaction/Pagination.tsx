const Pagination = () => {
  return (
    <div className="flex justify-between items-center mt-6 ">
      <button className="px-4 py-2 border rounded-lg hover:bg-[#187c74] hover:text-white">
        Prev
      </button>

      <div className="flex gap-2">
        {[1, 2].map((page) => (
          <button
            key={page}
            className={`w-9 h-9 rounded-lg border ${
              page === 2
                ? "bg-[#0F4F4A] text-white"
                : "hover:bg-[#187c74] hover:text-white"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button className="px-4 py-2 border rounded-lg hover:bg-[#187c74] hover:text-white">
        Next
      </button>
    </div>
  );
};

export default Pagination;
