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
  min-height: 500px;
`;
const MoviesItem = styled.div`
  min-width: 300px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

let Movies = ({
  movies,
  paginatedMovies,
  categories,
  onFilter,
  filterCriteria,
  onPageChange,
  currentPage,
  pageSize,
  onChangePageSize
}) => {
  if (movies && categories) {
    return (
      <React.Fragment>
        <Navbar>
          <div className="subtitle is-4">Categories :</div>
          <div className="select">
            <select
              value={filterCriteria}
              className="select"
              onChange={e => onFilter(e.target.value)}
            >
              <option value="">Tous les films</option>
              {categories.map((category, i) => (
                <option value={category} key={i}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </Navbar>
        <MoviesList className="columns">
          {paginatedMovies.length === 0 && currentPage === 1 ? (
            <h1>No movies to show</h1>
          ) : paginatedMovies.length === 0 && currentPage > 1 ? (
            onPageChange(currentPage - 1)
          ) : (
            paginatedMovies.map((movie, i) => (
              <MoviesItem key={i} className="column is-one-quarter">
                <Movie movie={movie} />
              </MoviesItem>
            ))
          )}
        </MoviesList>
        <Footer>
          <div>
            <Pagination
              itemCount={movies.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={onPageChange}
            />
          </div>

          <div>
            Afficher
            <div className="select">
              <select
                onChange={e => onChangePageSize(e.target.value)}
                defaultValue={pageSize}
              >
                <option value="4">4</option>
                <option value="8">8</option>
                <option value="12">12</option>
              </select>
            </div>
            <span>&nbsp; films par page</span>
          </div>
        </Footer>
      </React.Fragment>
    );
  }
  return null;
};

export default Movies;
