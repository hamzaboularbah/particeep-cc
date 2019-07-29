import React from "react";
import _ from "lodash";
import "./Pagination.sass";

let Pagination = props => {
  const { itemCount, pageSize, currentPage, onPageChange } = props;
  const pagesCount = Math.ceil(itemCount / pageSize);
  if (pagesCount <= 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav className="pagination" role="navigation">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        className="pagination-previous"
        title="This is the first page"
        style={{ display: currentPage === 1 ? "none" : "block" }}
      >
        Précédent
      </button>
      <ul className="pagination-list">
        {pages.map(page => (
          <li key={page}>
            <button
              onClick={() => onPageChange(page)}
              className={`pagination-link ${
                page === currentPage ? "is-current" : ""
              }`}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        className="pagination-next"
        style={{ display: currentPage === pagesCount ? "none" : "block" }}
      >
        Suivant
      </button>
    </nav>
  );
};

export default Pagination;
