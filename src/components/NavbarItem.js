"use client";

import React from "react";

import Link from "next/link";

import { useSearchParams } from "next/navigation";

const NavbarItem = ({ title, param }) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <Link
      href={`/?genre=${param}`}
      className={`flex items-center justify-center text-sm font-bold h-8 min-[270px]:w-auto w-full truncate hover:bg-dark_hover px-3 rounded-[.2rem] cursor-pointer transition-colors duration-300 ease ${
        genre === param ? "text-imdb bg-dark_hover" : "text-white"
      }`}
    >
      <span>{title}</span>
    </Link>
  );
};

export default NavbarItem;
