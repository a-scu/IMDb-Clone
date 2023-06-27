import React from "react";

import Link from "next/link";
import Image from "next/image";

import { BsHandThumbsUp } from "react-icons/bs";

const Result = ({ result }) => {
  return (
    <Link
      href={`/movie/${result.id}`}
      key={result.id}
      className="cursor-pointer rounded-[.2rem] overflow-hidden duration-300 bg-dark_contrast group min-h-[225px] h-full flex flex-col w-full"
    >
      <Image
        width={500}
        height={300}
        src={`https://image.tmdb.org/t/p/original/${
          result.backdrop_path || result.poster_path
        }`}
        placeholder="blur"
        blurDataURL="/loading.svg"
        style={{ maxWidth: "100%", height: "auto", flex: 1, display: "flex" }}
        loading="lazy"
        alt="Image is not available"
        className="group-hover:opacity-75 duration-300 transition-opacity"
      />
      <div className="px-3 py-1.5 flex flex-col h-full gap-y-1.5 flex-1">
        <h3 className="font-bold truncate">{result.title || result.name}</h3>
        <p className="line-clamp-3 text-sm font-semibold text-gray-400">
          {result.overview}
        </p>
        <div className="flex items-center justify-between gap-x-1.5 text-sm font-semibold">
          <p>{result.release_date || result.first_air_date}</p>
          <div className="flex items-center justify-between gap-x-1.5">
            <p>{result.vote_count}</p>
            <BsHandThumbsUp />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Result;
