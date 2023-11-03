"use client";

import React from "react";
import { CaretDown, Sun, Moon, Vignette } from "@phosphor-icons/react";
import { useState } from "react";
import { useTheme } from "next-themes";

const ThemeButton = () => {
  const [isOpen, setIsOpen] = useState();
  const handleModeButton = () => {
    setIsOpen((openState) => !openState);
  };

  const { resolvedTheme, setTheme } = useTheme();
  const lightTheme = () => {
    setTheme(resolvedTheme === "light" ? null : "light");
  };
  const darkTheme = () => {
    setTheme(resolvedTheme === "dark" ? null : "dark");
  };

  const SelectMode = () => {
    return (
      <div className="text-color-primary md:w-40 w-32 md:text-base text-xs transition-all">
        <button
          onClick={handleModeButton}
          className=" flex gap-2 justify-center items-center "
        >
          Select Mode <CaretDown size={20} />
        </button>
      </div>
    );
  };

  const ModeList = () => {
    return (
      <div className="text-color-primary md:w-40 w-32 md:text-base text-xs transition-all">
        <button
          onClick={handleModeButton}
          className=" flex gap-2 justify-center items-center "
        >
          Select Mode <CaretDown size={20} />
        </button>
        <div className="flex flex-col md:w-40 w-32 mt-1 absolute z-10">
          <div className="justify-between bg-color-card-light dark:bg-color-card-dark rounded-lg text-color-secondary">
            <button
              className="md:text-base text-xs flex items-center pl-3 gap-7 md:gap-8 py-1 dark:hover:text-color-yellow-fun hover:text-color-blue-tosca rounded-lg w-full shadow-lg text-color-secondary dark:text-color-primary"
              onClick={lightTheme}
            >
              Light Mode <Sun size={16} />
            </button>
            <button
              className="md:text-base text-xs flex items-center pl-3 gap-8 md:gap-9 py-1 dark:hover:text-color-yellow-fun hover:text-color-blue-tosca rounded-lg w-full shadow-lg text-color-secondary dark:text-color-primary"
              onClick={darkTheme}
            >
              Dark Mode <Moon size={16} />
            </button>
            <button className="md:text-base text-xs flex items-center pl-3 gap-4 py-1 dark:hover:text-color-yellow-fun hover:text-color-blue-tosca rounded-lg w-full shadow-lg text-color-secondary dark:text-color-primary">
              Default Mode <Vignette size={16} />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return isOpen ? <ModeList /> : <SelectMode />;
};

export default ThemeButton;
