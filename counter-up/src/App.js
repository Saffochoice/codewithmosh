import React, { Component } from 'react';
import Header from './components/Header/Header'
import Counters from './components/Counters/Counters'

import './App.css'
class App extends Component {

  render() {
    const { projectName, counters, activeCounters } = this.state
    const { resetCounters, deleteCounterById, changeCounterById } = this
    return (
      <div className="App">
        <Header projectName={projectName} activeCounters={activeCounters} />
        <Counters resetCounters={resetCounters} counters={counters} deleteCounterById={deleteCounterById} changeCounterById={changeCounterById} />
      </div>
    );
  }

  state = {
    projectName: 'CounterApp',
    activeCounters: 0,
    counters: [
      {
        id: 1,
        count: 0
      },
      {
        id: 2,
        count: 0
      },
      {
        id: 3,
        count: 0
      },
      {
        id: 4,
        count: 0
      },
    ]
  }

  componentDidMount() {
    this.updateActiveCounters()
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.counters !== this.state.counters) {
      this.updateActiveCounters()
    }
  }

  deleteCounterById = id => {
    const { counters } = this.state
    const idx = counters.findIndex(counter => counter.id === id)
    const countersNew = [...counters]
    countersNew.splice(idx, 1)
    this.setState({
      counters: countersNew
    })
  }
  changeCounterById = (id, type) => {
    const counters = [...this.state.counters]
    if(type === 'inc') {
      counters.find(counter => counter.id === id).count++
    } else if (type === 'dec') {
      counters.find(counter => counter.id === id).count === 0 ? counters.find(counter => counter.id === id).count = 0 : counters.find(counter => counter.id === id).count--
    }
    this.setState({
      counters: counters
    })
  }
  updateActiveCounters = () => {
    let activeCounters = 0
    this.state.counters.forEach(counter => {
      if(counter.count > 0) 
        activeCounters++
    })
    this.setState({
      activeCounters: activeCounters
    })
  }
  resetCounters = () => {
    let counters = [...this.state.counters]
    counters.forEach(counter => counter.count = 0)
    this.setState({
      counters: counters
    })
  }
}

export default App;
