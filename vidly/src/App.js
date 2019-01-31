import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import MoviesPage from './components/MoviesPage/MoviesPage'
import SingleMovie from './components/SingleMovie/SingleMovie'

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
    sortColumn: { path: 'title', order: 'asc' },
    currentRoutePage: 'movies'
  }

  render() {
    const { movies, genres, currentListItem, pageSize, currentPage, sortColumn } = this.state
    return (
      <div className="App container">
        <NavBar />

        <Switch>
          <Route path='/movies/:id' component={SingleMovie}/>
          <Route path='/movies'>
            <MoviesPage 
              setCurrentPage={this.setCurrentPage} 
              onSort={this.onSort} 
              deleteMovie={this.deleteMovie} 
              handleGenreSelect={this.handleGenreSelect} 
              toggleLike={this.toggleLike} 
              movies={movies} 
              genres={genres} 
              currentListItem={currentListItem} 
              pageSize={pageSize} 
              currentPage={currentPage} 
              sortColumn={sortColumn} />
          </Route>
          <Route path='/customers'><p>Get high</p></Route>
          <Route path='/rentals'><p>Get high</p></Route>
          <Redirect from='/' exact to='movies'></Redirect>
          <Redirect to='/not-found'></Redirect>
        </Switch>
      </div>
    );
  }

  componentDidMount() {
    const genres = [{ _id: '', name: 'All genres' }, ...getGenres()]
    this.setState({
      movies: getMovies(),
      genres
    })
  }

  setCurrentPage = page => {
    this.setState({
      currentPage: page
    })
  }

  onSort = sortColumn => {
    this.setState({ sortColumn })
  }

  handleGenreSelect = genre => {
    this.setState({ currentListItem: genre, currentPage: 1 })
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
