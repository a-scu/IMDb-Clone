import React from "react";

import Logo from "./Logo";
import HeaderItem from "./HeaderItem";
import DarkModeSwitch from "./DarkModeSwitch";

const Header = () => {
  return (
    <header className="p-3 bg-dark_gray transition-all duration-300 ease">
      <div className="flex justify-between items-center max-w-5xl m-auto gap-x-3">
        <Logo />
        <nav>
          <ul className="flex gap-x-3">
            <HeaderItem title={"About"} href={"/about"} />
            <DarkModeSwitch />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
