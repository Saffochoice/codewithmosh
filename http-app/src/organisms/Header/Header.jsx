import React, { Component } from 'react'
import UserInfo from '../UserInfo/UserInfo'

import './Header.scss'

export default class Header extends Component {

  render() {
    const { user } = this.props
    return (
      <div className='header-component'>
        <div className="logo">HttpApp</div>
        <UserInfo user={user} />
      </div>
    )
  }
}
