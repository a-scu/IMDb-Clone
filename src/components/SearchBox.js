"use client";

import React, { useState, useEffect } from "react";

import { useRouter } from "next/navigation";

import { GoSearch } from "react-icons/go";

const SearchBox = () => {
  const router = useRouter();

  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log(search);
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-8 rounded-[.2rem] max-w-[680px] w-full overflow-hidden items-center justify-center min-w-[94px] flex"
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
        className="px-1.5 h-full w-full bg-black hover:bg-dark_hover text-white transition-colors placeholder:text-gray-400 duration-300 ease outline-none focus:bg-dark_hover text-sm font-medium sm:px-3 min-w-[54px]"
      />
      <button
        type="submit"
        className="px-3 h-full flex items-center justify-center hover:bg-dark_hover transition-colors duration-300 ease bg-black text-white"
      >
        <GoSearch />
      </button>
    </form>
  );
};

export default SearchBox;
