import React from "react";

import Welcome from "@/components/Welcome";
import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

const page = async ({ searchParams }) => {
  const genre = searchParams.genre;

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "topRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language-en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  const data = await res.json();

  const results = data.results;

  if (!res.ok) throw new Error("Failed to fetch data");

  return <div>{!genre ? <Welcome /> : <Results results={results} />}</div>;
};

export default page;
