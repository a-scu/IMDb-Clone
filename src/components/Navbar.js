import React from "react";

import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center gap-4 sm:gap-8 py-3 bg-dark_contrast h-[60px] transitin-colors duration-300 ease">
      <NavbarItem title={"Trending"} param={"trending"} />
      <NavbarItem title={"Top Rated"} param={"topRated"} />
    </div>
  );
};

export default Navbar;
