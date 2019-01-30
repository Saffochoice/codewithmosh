import React, { Component } from 'react'
import PaginationMosh from '../common/Pagination/PaginationMosh'
import MoviesTable from '../MoviesTable/MoviesTable'
import { paginate } from '../_services/paginate'
import _ from 'lodash'

import './MovieList.css'

export default class MovieList extends Component {

  getPageData = () => {
    const { movies, selectedGenre, pageSize, currentPage, sortColumn } = this.props
    if(movies.length === 0 || !movies.length){
      return <div className='movie-list'><div className="movie-count">We have no movies there</div></div>
    }
    const filtered = selectedGenre && selectedGenre._id ? movies.filter(m => m.genre._id === selectedGenre._id) : movies
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]) 
    const paginated = paginate(sorted, currentPage, pageSize)
    return {filtered: filtered, paginated: paginated}
  }
  
  render() {
    const { toggleLike, deleteMovie, setCurrentPage, pageSize, currentPage, onSort, sortColumn } = this.props

    
    const { filtered, paginated } = this.getPageData()
    if(!filtered || !paginated)
      return this.getPageData()

    return (
      <React.Fragment>
        <div className='movie-list'>
          <div className="movie-count">Showing {filtered.length} movies in the database</div>
          <MoviesTable movies={paginated} toggleLike={toggleLike} deleteMovie={deleteMovie} onSort={onSort} sortColumn={sortColumn}/>
          
        </div>
        <PaginationMosh itemsCount={filtered.length} pageSize={pageSize} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </React.Fragment>
    )
  }

}
