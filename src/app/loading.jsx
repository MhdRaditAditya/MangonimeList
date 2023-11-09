"use client"

import { ThemeProvider } from "next-themes";

const Loading = () => {
  return (
    <ThemeProvider>
      <div className="flex justify-center items-center min-h-screen">
        <div className="loader dark:loaderdark flex justify-center items-center"></div>
      </div>
    </ThemeProvider>
  );
};

export default Loading;
