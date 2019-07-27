import React from "react";
import Movie from "../Movie";
let Movies = ({ movies, categories, onFilter, filterCriteria }) => {
  if (movies && categories) {
    return (
      <React.Fragment>
        <select onChange={e => onFilter(e.target.value)}>
          <option value="">All movies</option>
          {categories.map((category, i) => (
            <option value={category} key={i}>
              {category}
            </option>
          ))}
        </select>
        {movies.map((movie, i) => (
          <Movie key={i} index={i} movie={movie} />
        ))}
      </React.Fragment>
    );
  }
  return null;
};

export default Movies;
