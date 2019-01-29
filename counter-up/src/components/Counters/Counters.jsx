import React, { Component } from 'react'
import Counter from '../Counter/Counter'

import './Counters.css'

export default class Counters extends Component {
  
  render() {
    const { resetCounters, counters, changeCounterById, deleteCounterById } = this.props
    const counterItems = counters.map(counter => <Counter  counter={counter} key={counter.id} deleteCounterById={deleteCounterById} changeCounterById={changeCounterById} />)
    return (
      <div className='counters'>
        <div className="content-area">
          <div className="reset-btn btn blue" onClick={resetCounters}>Reset</div>
          {counterItems}
        </div>
      </div>
    )
  }
}
