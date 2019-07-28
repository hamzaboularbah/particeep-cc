import React from "react";
import _ from "lodash";

let Pagination = props => {
  const { itemCount, pageSize, currentPage, onPageChange } = props;
  const pagesCount = Math.ceil(itemCount / pageSize);
  if (pagesCount <= 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav
      className="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <button
        onClick={() => onPageChange(currentPage - 1)}
        className="pagination-previous"
        title="This is the first page"
        disabled={currentPage === 1}
      >
        Précédent
      </button>
      <ul className="pagination-list">
        {pages.map(page => (
          <li key={page}>
            <button
              href="#"
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
        disabled={currentPage === pagesCount}
      >
        Suivant
      </button>
    </nav>
  );
};

export default Pagination;
