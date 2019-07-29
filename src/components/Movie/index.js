import React from "react";
import Movie from "./Movie";
import { connect } from "react-redux";
import {
  likeMovie,
  disLikeMovie,
  deleteMovie,
  getCategories
} from "../../actions/actionCreators";

let MovieContainer = props => {
  const { movie, likeMovie, disLikeMovie, deleteMovie } = props;
  const onLikeMovie = id => {
    likeMovie(id);
  };
  const onDislikeLikeMovie = id => {
    disLikeMovie(id);
  };
  const onDeleteMovie = (id, movieCategory) => {
    deleteMovie(id, movieCategory);
  };
  return (
    <Movie
      onDislike={onDislikeLikeMovie}
      onLike={onLikeMovie}
      onDelete={onDeleteMovie}
      movie={movie}
    />
  );
};

const mapDispatchToProps = {
  likeMovie,
  disLikeMovie,
  deleteMovie,
  getCategories
};

const mapStateToProps = state => {
  return state;
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieContainer);
