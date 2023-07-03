import React from "react";

import Link from "next/link";
import Image from "next/image";

import { BsHandThumbsUp } from "react-icons/bs";

const Result = ({ result, genre, index }) => {
  return (
    <Link
      href={`/movie/${result.id}/${genre ? `?genre=${genre}` : ""}${
        index ? `&index=${index}` : ""
      }`}
      key={result.id}
      className="cursor-pointer rounded-[.2rem] justify-between overflow-hidden transition-colors duration-300 hover:bg-dark_hover ease bg-dark_gray group min-h-[225px] h-full flex flex-col w-full"
    >
      {result.backdrop_path || result.poster_path ? (
        <Image
          width={500}
          height={300}
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path ?? result.poster_path
          }`}
          placeholder="blur"
          blurDataURL="../assets/img/spinner.svg"
          alt="Image is not available"
          style={{
            maxWidth: "100%",
            height: "auto",
            flex: 1,
            display: "flex",
            aspectRatio: 16 / 9,
            objectFit: "contain",
          }}
          className="group-hover:opacity-75 duration-300 transition-opacity"
        />
      ) : (
        <div className="max-w-full h-auto aspect-video" />
      )}
      <div className="px-3 py-2 flex flex-col h-full gap-y-1.5 flex-1">
        <div className="flex items-center gap-x-1.5">
          {index && <span className="font-extrabold text-imdb">#{index}</span>}
          <h3 className="font-bold truncate text-white">
            {result.title ?? result.name}
          </h3>
        </div>

        <p className="line-clamp-3 text-sm font-medium text-gray-400">
          {result.overview}
        </p>
        <div className="flex items-center justify-between gap-x-1.5 text-sm font-semibold text-white">
          <p>{result.release_date ?? result.first_air_date}</p>
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
