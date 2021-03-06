import React, { useEffect } from "react";
import Movies from "./Movies";
import { connect } from "react-redux";
import { paginate } from "../../utils/paginate";
import {
  getMovies,
  getCategories,
  filterMovies,
  changePage,
  changePageSize
} from "../../actions/actionCreators";

const MoviesContainer = props => {
  const {
    getMovies,
    getCategories,
    filterMovies,
    changePage,
    changePageSize,
    movies,
    categories,
    currentPage,
    pageSize,
    filterCriteria
  } = props;
  useEffect(() => {
    getMovies();
    getCategories();
  }, [getMovies, getCategories]);

  const filterByCategory = filters => {
    filterMovies(filters);
  };

  const onPageChange = page => {
    changePage(page);
  };

  const onChangePageSize = size => {
    changePageSize(size);
  };
  const filteredMovies =
    movies && !filterCriteria.includes("all")
      ? movies.filter(movie => filterCriteria.includes(movie.category))
      : movies;

  return (
    <Movies
      filterCriteria={filterCriteria}
      currentPage={currentPage}
      pageSize={pageSize}
      onPageChange={onPageChange}
      onChangePageSize={onChangePageSize}
      onFilter={filterByCategory}
      categories={categories}
      paginatedMovies={paginate(filteredMovies, currentPage, pageSize)}
      movies={filteredMovies}
    />
  );
};

const mapDispatchToProps = {
  getMovies,
  getCategories,
  filterMovies,
  changePage,
  changePageSize
};

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesContainer);
