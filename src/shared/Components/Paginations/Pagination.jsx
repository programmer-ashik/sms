export const Pagination = ({
  currentPage,
  totalEntries,
  dataPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalEntries / dataPerPage);

  // calculate showing range
  const start = (currentPage - 1) * dataPerPage + 1;
  const end = Math.min(start + dataPerPage - 1, totalEntries);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center w-full py-3 text-sm gap-2">
      {/* Showing info */}
      <div className="text-gray-600">
        Showing <span className="font-semibold">{start}</span> to{" "}
        <span className="font-semibold">{end}</span> of{" "}
        <span className="font-semibold">{totalEntries}</span> entries
      </div>

      {/* Pagination controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded-md border ${
            currentPage === 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          Previous
        </button>

        <p className="text-gray-700">
          Page <span className="font-semibold">{currentPage}</span> of{" "}
          <span className="font-semibold">{totalPages}</span>
        </p>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded-md border ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};
