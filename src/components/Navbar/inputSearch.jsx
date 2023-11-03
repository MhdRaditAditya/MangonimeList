"use client";

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    if (event.keyCode === 13 || event.type === "click") {
      const keyword = searchRef.current.value;

      if (keyword == undefined || keyword == null || keyword.trim() == "") {
        toast.error("Make a specifict data", {
          position: "bottom-left",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.log("error");
      } else {
        event.preventDefault();
        router.push(`/search/${keyword}`);
      }
    }
  };

  return (
    <div className="relative items-center z-0">
      <input
        placeholder="Search..."
        ref={searchRef}
        className="p-2 rounded md:w-72 w-full"
        onKeyDown={handleSearch}
      />
      <button onClick={handleSearch} className="absolute top-2 end-2">
        <MagnifyingGlass size={24} />
      </button>
      <ToastContainer />
    </div>
  );
};

export default InputSearch;
