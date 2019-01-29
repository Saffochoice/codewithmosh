import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
  render() {
    const { activeCounters, projectName } = this.props
    return (
      <div className='header'>
        <div className="content-area flex">
          <div className="logo">{projectName}</div>
          <div className="active-items-count">{activeCounters}</div>
        </div>  
      </div>
    )
  }
}
