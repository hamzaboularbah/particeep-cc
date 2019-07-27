import React from "react";
import _ from "lodash";

let Pagination = props => {
  const { itemCount, pageSize, currentPage, onPageChange } = props;
  const pagesCount = Math.ceil(itemCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav className="pagination " role="navigation" aria-label="pagination">
      <a
        href="#"
        className="pagination-previous"
        title="This is the first page"
        disabled
      >
        Previous
      </a>
      <a href="#" className="pagination-next">
        Next page
      </a>
      <ul className="pagination-list">
        {pages.map(page => (
          <li key={page}>
            <a
              href="#"
              onClick={() => onPageChange(page)}
              className={`pagination-link ${
                page === currentPage ? "is-current" : ""
              }`}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
