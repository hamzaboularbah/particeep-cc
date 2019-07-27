import React, { useEffect } from "react";
import Movie from "./Movie";
import { connect } from "react-redux";
import {
  likeMovie,
  disLikeMovie,
  deleteMovie,
  getCategories
} from "../../actions/actionCreators";

let MovieContainer = props => {
  let onLikeMovie = id => {
    props.likeMovie(id);
  };
  let onDislikeLikeMovie = id => {
    props.disLikeMovie(id);
  };
  let onDeleteMovie = id => {
    props.deleteMovie(id, getCategories);
  };
  return (
    <Movie
      onDislike={onDislikeLikeMovie}
      onLike={onLikeMovie}
      onDelete={onDeleteMovie}
      movie={props.movie}
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
