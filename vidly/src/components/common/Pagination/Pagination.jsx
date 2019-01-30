import React, { Component } from 'react'

export default class Pagination extends Component {
  state = {
    currentItem: 0,
    count: this.props.itemsCount,
    pageSize: this.props.pageSize
  }
  render() {
    return (
      <div className='pagination'>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            {this.renderItems()}
          </ul>
        </nav>
      </div>
    )
  }
  renderItems = () => {
    const items = []
    for(let i = 0; i < this.state.count/this.state.pageSize; i++) {
      items.push(<li key={i*10} className="page-item"><a className="page-link" href='!#'>{i+1}</a></li>)
    }
    return items
  }
}
