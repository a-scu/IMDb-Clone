import React from "react";

import Link from "next/link";
import Image from "next/image";

import logo from "../assets/img/imdb-logo.svg";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image src={logo} alt="IMDb logo" className="min-w-[64px]" />
    </Link>
  );
};

export default Logo;
