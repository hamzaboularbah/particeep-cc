import React from "react";

let Movie = ({ movie, onLike, onDislike, onDelete }) => {
  return (
    <div>
      <h1>{movie.title}</h1>
      <h2>{movie.category}</h2>
      <span>{movie.likes}</span>
      <button onClick={() => onLike(movie.id)}>Like</button>
      <br />
      <span>{movie.dislikes}</span>
      <button onClick={() => onDislike(movie.id)}>Dislike</button>
      <button onClick={() => onDelete(movie.id)}>Delete</button>
    </div>
  );
};

export default Movie;
