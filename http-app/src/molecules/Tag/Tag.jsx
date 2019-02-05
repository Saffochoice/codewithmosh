import React from 'react'
import './Tag.scss'

const Tag = ({ tag, handleClick, selected }) => {
  return (
    <div className={ selected ? 'tag-component selected' : 'tag-component' } style={{ backgroundColor: tag.color, borderColor: tag.color }} onClick={() => handleClick(tag.id)}>{tag.name}</div>
  )
}

export default Tag

