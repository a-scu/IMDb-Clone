import React from "react";

import Logo from "./Logo";
import HeaderItem from "./HeaderItem";
import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <header className="p-3 bg-dark_gray transition-all duration-300 ease">
      <div className="flex justify-between items-center max-w-7xl m-auto gap-x-3">
        <Logo />
        <div className="w-full min-[300px]:flex hidden justify-center items-center">
          <SearchBox />
        </div>
        <nav>
          <ul className="gap-x-3">
            <HeaderItem title={"About"} href={"/about"} />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
