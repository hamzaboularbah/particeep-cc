import { movies$ } from "../data/movies";
import t from "./actionTypes";

export const getMovies = () => {
  return dispatch => {
    movies$.then(movies => {
      dispatch({
        type: t.GET_MOVIES,
        payload: movies
      });
    });
  };
};

export const getCategories = () => {
  return dispatch => {
    movies$
      .then(movies$ => movies$.map(movie => movie.category))
      .then(categories => {
        dispatch({
          type: t.GET_CATEGORIES,
          payload: categories.reduce(
            (acc, currentValue) =>
              acc.includes(currentValue) ? acc : [...acc, currentValue],
            []
          )
        });
      });
  };
};

export const filterMovies = filters => {
  return {
    type: t.FILTER_MOVIES,
    payload: filters
  };
};

export const likeMovie = id => {
  return {
    type: t.LIKE_MOVIE,
    payload: id
  };
};

export const disLikeMovie = id => {
  return {
    type: t.DISLIKE_MOVIE,
    payload: id
  };
};

export const deleteMovie = (id, category) => {
  return {
    type: t.DELETE_MOVIE,
    payload: {
      id,
      category
    }
  };
};
export const changePage = page => {
  return {
    type: t.CHANGE_PAGE,
    payload: page
  };
};

export const changePageSize = size => {
  return {
    type: t.CHANGE_PAGE_SIZE,
    payload: size
  };
};
