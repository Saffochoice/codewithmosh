import React, { Component } from 'react'
import TableHeader from '../common/TableHeader/TableHeader'
import TableBody from '../common/TableBody/TableBody'
import Like from '../common/Like/Like'

import './MoviesTable.css'

export default class MoviesTable extends Component {

  columns = [
    { path: 'title', label: 'Title' },
    { path: 'genre.name', label: 'Genre' },
    { path: 'numberInStock', label: 'Stock' },
    { path: 'dailyRentalRate', label: 'Rate' },
    { key: 'like', content: movie => <Like movie={movie} toggleLike={this.props.toggleLike} /> },
    { key: 'delete', content: movie => <button type="button" onClick={() => this.props.deleteMovie(movie._id)} className="btn btn-danger">Delete</button>},
    { key: 'wz2' },
  ]
  
  render() {
    const { movies, toggleLike, deleteMovie, sortColumn, onSort } = this.props
    return (
      <table className="table table-striped movies-table">
        <TableHeader sortColumn={sortColumn} onSort={onSort} columns={this.columns}/>
        <TableBody data={movies} columns={this.columns} toggleLike={toggleLike} deleteMovie={deleteMovie}/>
        
      </table>
    )
  }
}

