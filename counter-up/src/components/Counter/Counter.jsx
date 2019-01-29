import React, { Component } from 'react'
import './Counter.css'

export default class Counter extends Component {
  render() {
    const { counter, deleteCounterById, changeCounterById } = this.props
    return (
      <div className='counter'>
        <div className="badge-wrapper">
          <div className={counter.count > 0 ? 'badge blue' : 'badge yellow'}>{counter.count > 0 ? counter.count : 'Zero'}</div>
        </div>
        
        <div className="btn box" onClick={() => changeCounterById(counter.id, 'inc')}>+</div>
        <div className="btn box" onClick={() => changeCounterById(counter.id, 'dec')}>-</div>
        <div className="btn red" onClick={() => deleteCounterById(counter.id)}>Delete</div>
      </div>
    )
  }
}
