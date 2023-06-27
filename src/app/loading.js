import React from "react";

import Image from "next/image";

import spinner from "../assets/img/spinner.svg";

const loading = () => {
  return (
    <div className="flex items-center justify-center px-3 py-6 max-w-5xl mx-auto">
      <Image src={spinner} alt="loading" />
    </div>
  );
};

export default loading;
