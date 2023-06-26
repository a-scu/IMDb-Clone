import React from "react";

import Link from "next/link";
import Image from "next/image";

import DarkModeSwitch from "./DarkModeSwitch";

import logo from "../assets/img/imdb-logo.svg";

const Header = () => {
  return (
    <header className="p-3 bg-dark_gray transition-all duration-300 ease">
      <div className="flex justify-between items-center max-w-5xl m-auto gap-x-3">
        <Link href={"/"}>
          <Image src={logo} alt="IMDb logo" className="min-w-[64px]" />
        </Link>
        <nav>
          <ul className="flex gap-x-3">
            <li>
              <Link
                className="flex items-center justify-center h-8 text-white  hover:bg-dark_hover px-3 rounded-[.2rem] cursor-pointer transition-colors duration-300 ease"
                href={"/about"}
              >
                <span className="text-sm font-bold text-white">About</span>
              </Link>
            </li>

            <DarkModeSwitch />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;