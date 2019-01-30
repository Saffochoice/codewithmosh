import React from 'react'

export default function Like(props) {
  const { movie, toggleLike } = props
  return (
    <div className='like' onClick={() => toggleLike(movie._id)}>
      <i className={movie.liked ? 'fa fa-heart' : 'fa fa-heart-o'} aria-hidden="true"></i>
    </div>
  )
}
