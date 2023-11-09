"use client";

import { CaretLeft } from "@phosphor-icons/react";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";
import React from "react";

const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage((nextState) => nextState + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prevPage) => prevPage - 1);
    scrollTop();
  };

  return (
    <div className="flex justify-center items-center py-8 px-2 mt-10 gap-4 text-color-secondary dark:text-color-primary md:text-2xl ">
      {page == 1 ? null : (
        <button
          className="transition-all dark:hover:text-color-yellow-fun hover:text-color-blue-fun flex items-center justify-center gap-1"
          onClick={handlePrevPage}
        >
          <CaretLeft size={22} /> Prev
        </button>
      )}

      <p>
        {page} of {lastPage}
      </p>
      {page < lastPage ? (
        <button
          className="transition-all dark:hover:text-color-yellow-fun hover:text-color-blue-fun flex items-center justify-center gap-1"
          onClick={handleNextPage}
        >
          Next <CaretRight size={22} />
        </button>
      ) : null}
    </div>
  );
};

export default Pagination;
