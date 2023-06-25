"use client";

import React from "react";

import { ThemeProvider } from "next-themes";

const Providers = ({ children }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="dark:bg-black bg-white min-h-screen transition-colors duration-300 ease select-none">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Providers;
