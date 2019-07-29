import React from "react";
import Movie from "../Movie";
import Pagination from "../common/Pagination";
import Select from "react-select";
import "./Movies.sass";

let Movies = ({
  movies,
  paginatedMovies,
  categories,
  onFilter,
  onPageChange,
  currentPage,
  pageSize,
  filterCriteria,
  onChangePageSize
}) => {
  if (movies && categories) {
    console.log(filterCriteria);
    return (
      <React.Fragment>
        <div className="filter">
          <label className="">Catégories</label>
          <div className="select">
            <Select
              placeholder="Sélectionner une catégorie"
              onChange={values => {
                onFilter(
                  !values || values.length === 0
                    ? "all"
                    : values.map(option => option.value)
                );
              }}
              isMulti
              options={categories.map(category => ({
                value: category,
                label: category
              }))}
            />
          </div>
        </div>
        <div className="movies-list">
          {paginatedMovies.length === 0 && currentPage === 1 ? (
            <h1>No movies to show</h1>
          ) : paginatedMovies.length === 0 && currentPage > 1 ? (
            onPageChange(currentPage - 1)
          ) : (
            paginatedMovies.map((movie, i) => <Movie key={i} movie={movie} />)
          )}
        </div>
        <div className="footer">
          <div className="pagination-items">
            <Pagination
              itemCount={movies.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={onPageChange}
            />
          </div>

          <div className="items-by-page">
            Afficher &nbsp;
            <select
              onChange={e => onChangePageSize(e.target.value)}
              defaultValue={pageSize}
            >
              <option value="4">4</option>
              <option value="8">8</option>
              <option value="12">12</option>
            </select>
            <span>&nbsp; films par page</span>
          </div>
        </div>
      </React.Fragment>
    );
  }
  return (
    <div className="loader">
      <div className="spinner" />
      <div className="loading-message">Chargement des films en cours...</div>
    </div>
  );
};

export default Movies;
