import React from "react";

import Image from "next/image";

import { BsHandThumbsUp } from "react-icons/bs";

const Movie = async ({ params }) => {
  const movieId = params.id;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=en-US`
  );

  const movie = await res.json();

  console.log(movie);

  return (
    <div className="w-full p-3 pt-6">
      <div className="flex lg:flex-row flex-col items-center justify-between max-w-7xl mx-auto gap-6 gap-x-0 lg:bg-dark_gray lg:rounded-[.2rem] overflow-hidden">
        <Image
          width={500}
          height={300}
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          placeholder="blur"
          blurDataURL="../assets/img/spinner.svg"
          alt="Movie poster is not available"
          style={{
            width: "100%",
            height: "100%",
            flex: 1,
            display: "flex",
          }}
          className="rounded-[.2rem] lg:rounded-none md:max-w-[750px] lg:max-w-[640px]"
        />
        <div className="flex flex-col p-3 lg:px-6 gap-3 lg:bg-none bg-dark_gray rounded-[.2rem] lg:rounded-none md:max-w-[750px]">
          <h2 className="text-xl font-extrabold">
            {movie.title || movie.name}
          </h2>
          <p className="font-semibold text-gray-400">{movie.overview}</p>
          <div className="flex items-center justify-between gap-x-1.5 font-semibold">
            <p>{movie.release_date || movie.first_air_date}</p>
            <div className="flex items-center justify-between gap-x-1.5">
              <p>{movie.vote_count}</p>
              <BsHandThumbsUp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
