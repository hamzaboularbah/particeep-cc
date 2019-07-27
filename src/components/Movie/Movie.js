import React from "react";

let Movie = ({ movie, onLike, onDislike, onDelete }) => {
  return (
    <div className="card">
      {/* <figure className="image is-4by3" /> */}
      <div className="card-content">
        <div className="title is-4">{movie.title}</div>
        <div className="title is-6">{movie.category}</div>
      </div>
      <footer className="card-footer">
        <span className="card-footer-item" onClick={() => onLike(movie.id)}>
          <i
            className={movie.liked ? "fas fa-thumbs-up" : "far fa-thumbs-up"}
          />
          {movie.likes}
        </span>

        <span className="card-footer-item" onClick={() => onDislike(movie.id)}>
          <i
            className={
              movie.disLiked ? "fas fa-thumbs-down" : "far fa-thumbs-down"
            }
          />
          {movie.dislikes}
        </span>
        <span className="card-footer-item" onClick={() => onDelete(movie.id)}>
          <i className="fas fa-trash-alt" />
        </span>
      </footer>
    </div>
  );
};

export default Movie;
