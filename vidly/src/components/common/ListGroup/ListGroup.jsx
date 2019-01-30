import React from 'react'

export default function ListGroup(props) {
  const { items, textProp, idProp, funcProp, currentProp } = props
  return (
    <ul className='list-group' style={{marginTop: 20}}>
      {items.map(item => <li key={item[idProp]} style={{cursor: 'pointer'}} onClick={() => props[funcProp](item)}  className={item === props[currentProp] ? 'list-group-item active' : 'list-group-item'}>{item[textProp]}</li>)}
    </ul>
  )
}

ListGroup.defaultProps = {
  textProp: 'name',
  idProp: '_id',
  currentProp: 'currentListItem'
};
