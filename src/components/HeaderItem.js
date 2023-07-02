"use client";

import React from "react";

import Link from "next/link";

import { usePathname } from "next/navigation";

const HeaderItem = ({ title, href }) => {
  const pathname = usePathname();

  return (
    <li>
      <Link
        href={href}
        className={`flex items-center bg-dark_contrast justify-center text-sm font-bold h-8 hover:bg-dark_hover px-3 rounded-[.2rem] cursor-pointer transition-colors duration-300 ease ${
          pathname === href ? "text-imdb bg-dark_hover" : "text-white"
        }`}
      >
        <span>{title}</span>
      </Link>
    </li>
  );
};

export default HeaderItem;
