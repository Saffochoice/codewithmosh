import React from 'react'

const SingleMovie = ({ match, history }) => {
  return (
    <div>
      <h1>{match.params.id}</h1>

      <div className="btn btn-primary" onClick={() => history.push('/movies')}>Save</div>
    </div>

  )
}

export default SingleMovie