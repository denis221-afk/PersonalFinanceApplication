import type { ITransactions } from "../../Type/Type";

interface IProps {
  totalPages: number;
  currentPage: number;
}
const Pagination = ({ totalPages, currentPage }: IProps) => {
  let pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  if (totalPages == 0) {
    pages = Array.from({ length: 1 }, (_, i) => i + 1);
  }
  console.log(totalPages);

  return (
    <div className="flex justify-between items-center mt-6 ">
      <button className="px-4 py-2 border rounded-lg hover:bg-[#187c74] hover:text-white">
        Prev
      </button>

      <div className="flex gap-2">
        {pages.map((page) => (
          <button
            key={page}
            className={`w-9 h-9 rounded-lg border ${
              page === currentPage
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
