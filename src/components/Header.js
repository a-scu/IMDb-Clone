import React from "react";

import Logo from "./Logo";
import HeaderItem from "./HeaderItem";
import DarkModeSwitch from "./DarkModeSwitch";
import SearchBox from "./SearchBox";

import { RiMenu2Fill } from "react-icons/ri";

const Header = () => {
  return (
    <header className="p-3 bg-dark_gray transition-all duration-300 ease">
      <div className="flex justify-between items-center max-w-7xl m-auto gap-x-3">
        <Logo />
        <div className="w-full min-[270px]:flex hidden justify-center items-center">
          <SearchBox />
        </div>
        <nav>
          <ul className="hidden gap-x-3 sm:flex">
            <HeaderItem title={"About"} href={"/about"} />
            <DarkModeSwitch />
          </ul>
          <li className="px-3 h-8 rounded-[.2rem] flex items-center justify-center bg-dark_contrast sm:hidden">
            <RiMenu2Fill />
          </li>
        </nav>
      </div>
    </header>
  );
};

export default Header;
