import React from "react";
import Movie from "./Movie";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { likeMovie, disLikeMovie } from "../../actions/actionCreators";

let MovieContainer = props => {
  let onLikeMovie = id => {
    props.likeMovie(id);
  };
  let onDislikeLikeMovie = id => {
    props.disLikeMovie(id);
  };
  return (
    <Movie
      onDislike={onDislikeLikeMovie}
      onLike={onLikeMovie}
      movie={props.movie}
    />
  );
};

const mapDispatchToProps = { likeMovie, disLikeMovie };

const mapStateToProps = state => {
  return state;
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieContainer);
