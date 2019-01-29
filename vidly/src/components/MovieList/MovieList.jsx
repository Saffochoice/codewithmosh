import React, { Component } from 'react'
import './MovieList.css'

export default class MovieList extends Component {
  render() {
    const { movies } = this.props

    if(movies.length === 0 || !movies.length){
      return <div className='movie-list'><div className="movie-count">We have no movies there</div></div>
    }

    return (
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
            {this.renderMovies()}
          </tbody>
        </table>
      </div>
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
