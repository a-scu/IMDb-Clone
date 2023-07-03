import React from "react";

import Result from "./Result";

const Results = ({ results, genre, showsIndex }) => {
  return (
    <div className="px-3 py-6">
      <div className="m-auto flex flex-col items-center justify-center min-[465px]:grid min-[465px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl rounded-[.2rem] gap-3">
        {results.map((result, index) => {
          return (
            <Result
              key={result.id}
              result={result}
              genre={genre}
              index={showsIndex && index + 1}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Results;
