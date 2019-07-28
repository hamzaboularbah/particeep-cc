import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp as fasThumbsUp,
  faThumbsDown as fasThumbsDown,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";

let Movie = ({ movie, onLike, onDislike, onDelete }) => {
  const { id, title, category, likes, dislikes, liked, disLiked } = movie;
  const ratio = Math.ceil((likes / (likes + dislikes)) * 100);
  return (
    <div className="card">
      {/* <figure className="image is-4by3" /> */}
      <div className="card-content">
        <div className="title is-4">{title}</div>
        <div className="title is-6">{category}</div>
        <progress
          className="progress is-info is-small"
          value={ratio}
          max="100"
        />
      </div>
      <footer className="card-footer">
        <span className="card-footer-item" onClick={() => onLike(id)}>
          {liked ? (
            <FontAwesomeIcon icon={fasThumbsUp} />
          ) : (
            <FontAwesomeIcon icon={faThumbsUp} />
          )}
          {likes}
        </span>

        <span className="card-footer-item" onClick={() => onDislike(id)}>
          {disLiked ? (
            <FontAwesomeIcon icon={fasThumbsDown} />
          ) : (
            <FontAwesomeIcon icon={faThumbsDown} />
          )}
          {dislikes}
        </span>
        <span
          className="card-footer-item"
          onClick={() => onDelete(id, category)}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </span>
      </footer>
    </div>
  );
};

export default Movie;
