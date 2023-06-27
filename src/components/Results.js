import React from "react";

const Results = ({ results }) => {
  return (
    <div className="p-3">
      {results.map((result) => {
        return <div key={result.id}>{result.original_title}</div>;
      })}
    </div>
  );
};

export default Results;
