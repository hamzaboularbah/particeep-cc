import React from "react";

let Movie = ({ movie, onLike, onDislike }) => {
  return (
    <div>
      <h1>{movie.title}</h1>
      <span>{movie.likes}</span>
      <button onClick={() => onLike(movie.id)}>like</button>
      <br />
      <span>{movie.dislikes}</span>
      <button onClick={() => onDislike(movie.id)}>dislike</button>
    </div>
  );
};

export default Movie;
