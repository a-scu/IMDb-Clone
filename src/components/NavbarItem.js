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
      className={`flex items-center justify-center px-3 font-bold rounded-[.2rem] hover:bg-dark_hover transition-colors duration-300 text-[14px] ease h-8 ${
        genre === param ? "bg-dark_hover text-imdb" : "text-white"
      }`}
    >
      <h2>{title}</h2>
    </Link>
  );
};

export default NavbarItem;
