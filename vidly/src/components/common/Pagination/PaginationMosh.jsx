import React from 'react'
import PropTypes from 'prop-types'; // ES6
import _ from 'lodash'

const PaginationMosh = props => {
  const { itemsCount, pageSize, currentPage, setCurrentPage } = props
  const pageCount = itemsCount / pageSize
  const pages = _.range(1, pageCount + 1)
  return (
    <div className='pagination'>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map(el => <li key={el} onClick={() => setCurrentPage(el)} className={currentPage === el ? 'page-item active' : 'page-item'}><a className="page-link" >{el}</a></li>)}
        </ul>
      </nav>
    </div>
  );
};

PaginationMosh.propTypes = {
  itemsCount: PropTypes.number.isRequired, 
  pageSize: PropTypes.number.isRequired, 
  currentPage: PropTypes.number.isRequired, 
  setCurrentPage: PropTypes.func.isRequired, 
}

export default PaginationMosh;