import React, { useEffect, useState } from 'react';

export const TablePagination = ({
  totalPage,
  rowsPerPage,
  setRowsPerPage,
  setPage,
  page,
}) => {
  const [pages, setPages] = useState([]);

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (totalPage > page) {
      setPage(page + 1);
    }
  };

  const handleSelect = (page) => {
    setPage(page);
  };

  const generatePage = () => {
    let newPages = [];
    for (let i = 1; i <= totalPage; i++) {
      if (page === i) {
        newPages.push(
          <li
            key={i}
            className='active'
            title={i + ' Page'}
          >
            {i}
          </li>
        );
      } else if (
        i === page + 1 ||
        i === page - 1 ||
        (i === 3 && page === 1) ||
        (i === page - 2 && page === totalPage)
      ) {
        newPages.push(
          <li
            key={i}
            onClick={() => handleSelect(i)}
            title={i + ' Page'}
          >
            {i}
          </li>
        );
      }
    }
    setPages(newPages);
  };

  useEffect(() => {
    if (page) generatePage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, totalPage]);

  /**REnder HTML**/
  return (
    <div className='sv-pagination'>
      <ul>
        <li
          className='first-record'
          onClick={() => setPage(1)}
          title={'First Page'}
        >
          {'<<'}
        </li>
        <li
          className='previous-record'
          onClick={handlePrevious}
          title={'Previous Page'}
        >
          {'<'}
        </li>
        {pages}
        <li
          className='next-record'
          onClick={handleNext}
          title={'Next Page'}
        >
          {'>'}
        </li>
        <li
          className='last-record'
          onClick={() => setPage(totalPage)}
          title={'Last Page'}
        >
          {'>>'}
        </li>
      </ul>
    </div>
  );
};
