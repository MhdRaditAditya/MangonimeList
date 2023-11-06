"use client";

import React from "react";
import { useTheme } from "next-themes";
import { MoonStars, Sun } from "@phosphor-icons/react/dist/ssr";

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const themeProviders = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  const SunMode = () => {
    return (
      <div className="gap-5">
        <button
          onClick={themeProviders}
          className="text-color-primary md:text-base text-xs"
        >
          <Sun size={24} />
        </button>
      </div>
    );
  };

  const MoonMode = () => {
    return (
      <div className="gap-5">
        <button
          onClick={themeProviders}
          className="text-color-primary"
        >
          <MoonStars size={24} />
        </button>
      </div>
    );
  };

  return resolvedTheme === "light" ? <SunMode /> : <MoonMode />;
};

export default ThemeButton;
