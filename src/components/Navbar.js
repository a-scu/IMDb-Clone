import React from "react";

import NavbarItem from "./NavbarItem";
import SearchBox from "./SearchBox";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center min-[300px]:gap-0 gap-3 p-3 bg-dark_contrast flex-col">
      <li className="min-[300px]:hidden flex w-full">
        <SearchBox />
      </li>
      <ul className="gap-3 flex min-[300px]:flex-row flex-col sm:gap-6 justify-center items-center w-full">
        <NavbarItem title={"Trending"} param={"trending"} />
        <NavbarItem title={"Top Rated"} param={"topRated"} />
      </ul>
    </div>
  );
};

export default Navbar;
