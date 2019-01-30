import React, { Component } from 'react'

export default class TableHeader extends Component {
  raiseSort(path) {
    const sortColumn = {...this.props.sortColumn}
    if(sortColumn.path === path) 
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc'
    else {
      sortColumn.path = path 
      sortColumn.order = 'asc'
    }
    this.props.onSort(sortColumn)
  }

  renderSortIcon = (column) => {
    if(column.path !== this.props.sortColumn.path) return null 
    if(this.props.sortColumn.order === 'asc') return <i className="fa fa-sort-desc" aria-hidden="true"></i>
    return <i className="fa fa-sort-asc" aria-hidden="true"></i>
  }

  render() {
    const { columns } = this.props
    return (
      <thead className='thead'>
        <tr>
          {columns.map(c => <th key={c.path || c.key} onClick={c.key ? null : (() => this.raiseSort(c.path))} scope="col" ><span style={{ display: 'flex', alignItems: 'center' }}>{c.label} {this.renderSortIcon(c)}</span></th>)}

        </tr>
      </thead>
    )
  }
}
