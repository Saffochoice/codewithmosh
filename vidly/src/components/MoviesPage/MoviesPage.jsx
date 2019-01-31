import React, { Component } from 'react'
import MovieList from '../MovieList/MovieList'
import ListGroup from '../common/ListGroup/ListGroup'

export default class MoviesPage extends Component {
  render() {
    const { handleGenreSelect, genres, currentListItem, sortColumn, onSort, pageSize, currentPage, setCurrentPage, movies, deleteMovie, toggleLike } = this.props
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            handleGenreSelect={handleGenreSelect}
            items={genres}
            funcProp='handleGenreSelect'
            currentListItem={currentListItem}
          /></div>
        <div className="col-9">
          <MovieList
            sortColumn={sortColumn}
            onSort={onSort}
            pageSize={pageSize}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            movies={movies}
            deleteMovie={deleteMovie}
            toggleLike={toggleLike}
            selectedGenre={currentListItem} />
        </div>
      </div>
    )
  }
}
