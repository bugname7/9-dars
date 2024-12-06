import React from "react";

function Pagination({ itemsPerPage, totalItems, onPageChange, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pageNumbers.length) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-between items-center mt-8">
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        className="bg-gray-300 p-2 rounded-lg"
      >
        Previous
      </button>

      <div className="flex gap-2">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => onPageChange(number)}
            className={`p-2 rounded-lg ${
              number === currentPage ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {number}
          </button>
        ))}
      </div>
      <button
        onClick={handleNextPage}
        disabled={currentPage === pageNumbers.length}
        className="bg-gray-300 p-2 rounded-lg"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
