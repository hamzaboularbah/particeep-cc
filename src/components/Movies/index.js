import React, { useEffect } from "react";
import Movies from "./Movies";
import {
  getMovies,
  getCategories,
  filterMovies
} from "../../actions/actionCreators";
import { connect } from "react-redux";

let MoviesContainer = props => {
  useEffect(() => {
    props.getMovies();
    props.getCategories();
  }, []);

  let filterByCategory = category => {
    props.filterMovies(category);
  };

  const { movies, categories } = props;
  const filteredMovies = props.filterCriteria
    ? movies.filter(movie => movie.category == props.filterCriteria)
    : movies;
  return (
    <Movies
      filterCriteria={props.filterCriteria ? props.filterCriteria : null}
      onFilter={filterByCategory}
      categories={categories}
      movies={filteredMovies}
    />
  );
};

const mapDispatchToProps = { getMovies, getCategories, filterMovies };

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesContainer);
