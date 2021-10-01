import React from 'react'
import PropTypes from 'prop-types'
export default function Student({ student, handleDelete, handleStartEdit }) {
  //Destructuring nested object
  const { id, name, age } = student

  return (
    <li key={id} className="list-group-item">
      <span>
        {name}: {age}
      </span>
      <div className="btn-group">
        <button
          className="btn btn-info editBtn"
          onClick={() => {
            handleStartEdit(id)
          }}
        >
          Sửa
        </button>
        <button
          className="btn btn-danger deleteBtn"
          onClick={() => {
            handleDelete(id)
          }}
        >
          Xoá
        </button>
      </div>
    </li>
  )
}
Student.propTypes = {
  student: PropTypes.object.isRequired
}
