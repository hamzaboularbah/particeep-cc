import React from "react";
import Movie from "../Movie";
import styled from "styled-components";
import Pagination from "../common/Pagination";

const Navbar = styled.nav`
  margin-top: 20px;
  display: flex;
  > div {
    margin: 0px 20px 0px 0px;
  }
`;
const MoviesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const MoviesItem = styled.div`
  min-width: 300px;
`;

let Movies = ({
  movies,
  paginatedMovies,
  categories,
  onFilter,
  onPageChange,
  currentPage,
  pageSize
}) => {
  if (movies && categories) {
    return (
      <React.Fragment>
        <Navbar>
          <div className="subtitle is-4">Categories :</div>
          <div className="select">
            <select className="select" onChange={e => onFilter(e.target.value)}>
              <option value="">All movies</option>
              {categories.map((category, i) => (
                <option value={category} key={i}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </Navbar>
        <MoviesList className="columns">
          {paginatedMovies.map((movie, i) => (
            <MoviesItem key={i} className="column is-one-quarter">
              <Movie movie={movie} />
            </MoviesItem>
          ))}
        </MoviesList>
        <Pagination
          itemCount={movies.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      </React.Fragment>
    );
  }
  return null;
};

export default Movies;
