import React from "react";

import Results from "@/components/Results";

const SearchPage = async ({ params }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.search}&language=en-US&include_adult=false`
  );

  if (!res.ok) throw new Error("Error fetching data");

  const data = await res.json();

  const results = data.results;

  return (
    <div className="mx-auto p-3 pt-6 flex justify-center items-center gap-3">
      {results && results.length === 0 ? (
        <h1 className="font-bold">No results found</h1>
      ) : (
        results && <Results results={results} />
      )}
    </div>
  );
};

export default SearchPage;
