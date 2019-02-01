import React from 'react'

export default function Input({ title, tag, handleChange, value }) {
  return (
    <div className="form-group">
      <label htmlFor={tag}>{title}</label>
      <input name={tag} onChange={handleChange} type="text" id='username' className='form-control' value={value} />
    </div>
  )
}
