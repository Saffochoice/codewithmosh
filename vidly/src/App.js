import React, { Component } from 'react';
import MovieList from './components/MovieList/MovieList'
import ListGroup from './components/common/ListGroup/ListGroup'


import { getMovies } from './services/fakeMovieService'
import { getGenres } from './services/fakeGenreService'

import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

class App extends Component {

  state = {
    movies: [],
    genres: [],
    currentListItem: null,
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: 'title', order: 'asc' }
  }

  setCurrentPage = page => {
    this.setState({
      currentPage: page
    })
  }

  componentDidMount() {
    const genres = [{_id: '', name: 'All genres'}, ...getGenres()]
    this.setState({
      movies: getMovies(),
      genres
    })
  }

  render() {
    const { movies, genres, currentListItem, pageSize, currentPage, sortColumn } = this.state
    return (
      <div className="App container">
        <div className="row">
          <div className="col-3">
          <ListGroup 
            handleGenreSelect={this.handleGenreSelect} 
            items={genres} 
            funcProp='handleGenreSelect'
            currentListItem={currentListItem}
          /></div>
          <div className="col-9">
            <MovieList 
              sortColumn={sortColumn}
              onSort={this.onSort} 
              pageSize={pageSize} 
              currentPage={currentPage} 
              setCurrentPage={this.setCurrentPage} 
              movies={movies} 
              deleteMovie={this.deleteMovie} 
              toggleLike={this.toggleLike} 
              selectedGenre={currentListItem}/>
          </div>
        </div>
      </div>
    );
  }

  onSort = sortColumn => {
    this.setState({ sortColumn })
  }

  handleGenreSelect = genre => {
    this.setState({currentListItem: genre, currentPage: 1})
  }

  toggleLike = (id) => {
    const newMovies = [...this.state.movies]
    newMovies.find(el => el._id === id).liked = !newMovies.find(el => el._id === id).liked
    this.setState({
      movies: newMovies
    })
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
