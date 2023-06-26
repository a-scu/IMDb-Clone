import React from "react";

import Link from "next/link";

const HeaderItem = ({ title, href, isActive }) => {
  return (
    <li>
      <Link
        href={href}
        className={`text-white flex items-center justify-center text-sm font-bold h-8 hover:bg-dark_hover px-3 rounded-[.2rem] cursor-pointer transition-colors duration-300 ease"
        }`}
      >
        <span>{title}</span>
      </Link>
    </li>
  );
};

export default HeaderItem;
