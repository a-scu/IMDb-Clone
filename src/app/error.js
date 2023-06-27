"use client";

import React, { useEffect } from "react";

const error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center gap-y-6 flex-col p-3">
      <h1 className="mt-8 text-xl">Something went wrong</h1>
      <button
        onClick={() => reset()}
        className="bg-dark_contrast h-8 px-3 rounded-[.2rem] text-sm flex items-center justify-center hover:bg-dark_hover"
      >
        Try Again
      </button>
    </div>
  );
};

export default error;
