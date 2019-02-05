import React from 'react'
import './UserInfo.scss'

const UserInfo = ({ user }) => {
  return (
  <div className='user-info-component'>
    <div className="icon">{user.firstName && user.lastName ? `${user.firstName[0]}${user.lastName[0]}` : ''}</div>
    <div className="name">{user.firstName} {user.lastName}</div>
    
  </div>)
}

export default UserInfo
