import React from 'react'

export default function Input({ title, tag, handleChange, value, error }) {
  return (
    <div className="form-group">
      <label htmlFor={tag}>{title}</label>
      <input name={tag} onChange={handleChange} type="text" id='username' className='form-control' value={value} />
      { error && <div className='alert alert-danger'>{error}</div> }
    </div>
  )
}
