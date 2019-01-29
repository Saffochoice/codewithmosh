import React, { Component } from 'react';
import MovieList from './components/MovieList/MovieList'
import { getMovies } from './services/fakeMovieService'

import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

class App extends Component {

  state = {
    movies: getMovies()
  }

  render() {
    const { movies } = this.state
    return (
      <div className="App container">
        <MovieList movies={movies} deleteMovie={this.deleteMovie}/>
      </div>
    );
  }

  deleteMovie = id => {
    let movies = [...this.state.movies]
    movies.splice(movies.findIndex(movie => movie._id === id), 1)
    this.setState({
      movies: movies
    })
  }
}

export default App;
