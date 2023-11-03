"use client";

import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    if (page < lastPage) {
      setPage((nextState) => nextState + 1);
      scrollTop();
    } else {
      null;
      toast.warn("Can't do that", {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const handlePrevPage = () => {
    if (page === 1) {
      null;
      toast.warn("Can't do that", {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      setPage((prevPage) => prevPage - 1);
      scrollTop();
    }
  };

  return (
    <div className="flex justify-center items-center py-8 px-2 gap-4 text-color-secondary dark:text-color-primary md:text-2xl ">
      <button
        className="transition-all dark:hover:text-color-yellow-fun hover:text-color-blue-tosca"
        onClick={handlePrevPage}
        id="prev"
      >
        Prev
      </button>
      <p>
        {page} of {lastPage}
      </p>
      <button
        className="transition-all dark:hover:text-color-yellow-fun hover:text-color-blue-tosca"
        onClick={handleNextPage}
        id="next"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
