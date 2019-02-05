import React, { Component } from 'react'
import Tag from '../../molecules/Tag/Tag'
import './Tags.scss'

export default class Tags extends Component {
  render() {
    const { tags, handleClick, currentTag } = this.props
    return (
      <div className='tags-component'>
        <Tag tag={{ name: 'All', id: 99, color: '#aaa' }} handleClick={handleClick} selected={ currentTag === 99 ? true : false}/>
        { tags.map(tag => <Tag tag={tag} key={tag.id} handleClick={handleClick} selected={ currentTag === tag.id ? true : false}/>) }
      </div>
    )
  }
}
