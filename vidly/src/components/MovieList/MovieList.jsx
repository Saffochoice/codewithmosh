import React, { Component } from 'react'
import PaginationMosh from '../common/Pagination/PaginationMosh'
import { paginate } from '../_services/paginate'

import './MovieList.css'

export default class MovieList extends Component {
  state = {
    pageSize: 4,
    currentPage: 1
  }
  setCurrentPage = page => {
    this.setState({
      currentPage: page
    })
  }
  render() {
    const { movies } = this.props
    const { pageSize, currentPage } = this.state

    if(movies.length === 0 || !movies.length){
      return <div className='movie-list'><div className="movie-count">We have no movies there</div></div>
    }

    return (
      <React.Fragment>
        <div className='movie-list'>
          <div className="movie-count">Showing {movies.length} movies in the database</div>

          <table className="table table-striped ">
            <thead className='thead-dark'>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">Rate</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {paginate(this.renderMovies(), currentPage, pageSize)}
            </tbody>
          </table>
        </div>
        <PaginationMosh itemsCount={movies.length} pageSize={pageSize} currentPage={currentPage} setCurrentPage={this.setCurrentPage}/>
      </React.Fragment>
    )
  }

  renderMovies = () => {
    const { deleteMovie } = this.props

    const movies = this.props.movies.map(movie => {
      return (
        <tr key={movie._id}>
          <th scope="row">{movie.title}</th>
          <td>{movie.genre.name}</td>
          <td>{movie.numberInStock}</td>
          <td>{movie.dailyRentalRate}</td>
          <td><button type="button" onClick={() => deleteMovie(movie._id)} className="btn btn-danger">Delete</button></td>
        </tr>
      )
    })

    return movies
  }
}
