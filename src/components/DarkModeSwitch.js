"use client";

import React, { useState, useEffect } from "react";

import { useTheme } from "next-themes";

import { MdLightMode, MdDarkMode } from "react-icons/md";

const DarkModeSwitch = () => {
  const { theme, systemTheme, setTheme } = useTheme();

  const currentTheme = theme === "systemTheme" ? systemTheme : theme;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && currentTheme === "dark" ? (
        <li
          onClick={() => setTheme("light")}
          className="flex items-center justify-center h-8 bg-dark_contrast hover:bg-dark_hover px-3 rounded-[.2rem] cursor-pointer text-white transition-colors duration-300 ease"
        >
          <MdDarkMode className="text-imdb" />
        </li>
      ) : mounted && currentTheme !== "dark" ? (
        <li
          onClick={() => setTheme("dark")}
          className="flex items-center justify-center h-8 bg-dark_contrast hover:bg-dark_hover px-3 rounded-[.2rem] cursor-pointer text-white transition-colors duration-300 ease"
        >
          <MdLightMode className="text-imdb" />
        </li>
      ) : (
        <></>
      )}
    </>
  );
};

export default DarkModeSwitch;
