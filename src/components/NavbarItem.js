"use client";

import React from "react";

import Link from "next/link";

import { useSearchParams, usePathname } from "next/navigation";

const NavbarItem = ({ title, param }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <Link
      href={`/?genre=${param}`}
      className={`flex items-center justify-center text-sm font-bold h-8 min-[300px]:w-auto w-full truncate hover:bg-dark_hover px-3 rounded-[.2rem] cursor-pointer transition-colors duration-300 ease ${
        genre === param || (pathname === "/" && !genre && param === "trending")
          ? "text-imdb bg-dark_hover"
          : "text-white"
      }`}
    >
      <span>{title}</span>
    </Link>
  );
};

export default NavbarItem;
