import React, { Component } from 'react'
import Tags from './organisms/Tags/Tags'
import Header from './organisms/Header/Header'
import api from './services/apiService'
import './App.scss'


class App extends Component {

  state = {
    currentUser: {},
    tags: [],
    chunks: [],
    currentTag: 99,
  }

  render() {
    const { tags, chunks, currentTag, currentUser } = this.state
    return (
      <div className="App">
        <Header user={currentUser}/>
        <Tags tags={tags} handleClick={this.handleTagClick} currentTag={currentTag}/>
      </div>
    );
  }

  async componentDidMount() {
    const users = await api.getUsers()
    this.setState({ currentUser: users.data ? users.data.find(el => el.id === 1) : {} })

    const tags = await api.getTags(this.state.currentUser.id)
    const chunks = await api.getChunks(this.state.currentUser.id)
    this.setState({ tags: tags.data, chunks: chunks.data })
  }
  
  setUser = user => {
    this.setState({ currentUser: user })
  }
  // tags logic
  handleTagClick = id => {
    this.setState({ currentTag: id })
  }
}

export default App;
