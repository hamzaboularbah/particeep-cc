import React, { useEffect } from "react";
import Movies from "./Movies";
import { connect } from "react-redux";
import { paginate } from "../../utils/paginate";
import {
  getMovies,
  getCategories,
  filterMovies,
  changePage
} from "../../actions/actionCreators";

let MoviesContainer = props => {
  useEffect(() => {
    props.getMovies();
    props.getCategories();
  }, []);

  let filterByCategory = category => {
    props.filterMovies(category);
  };

  let onPageChange = page => {
    props.changePage(page);
  };
  const { movies, categories, filterCriteria, currentPage, pageSize } = props;
  const filteredMovies = filterCriteria
    ? movies.filter(movie => movie.category === filterCriteria)
    : movies;

  return (
    <Movies
      currentPage={currentPage}
      pageSize={pageSize}
      onPageChange={onPageChange}
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
  changePage
};

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesContainer);
