import React, { useReducer } from 'react'
import { useState } from 'react/cjs/react.development'
import './UserStyle.scss'
const reducer = (state, action) => {
  switch (action.type) {
    case 'submit':
      return [...state, { value: action.payload, id: new Date().toISOString() }]
    case 'delete':
      return state.filter(todo => todo.id !== action.payload)

    default:
      return state
  }
}

export default function UserReducer() {
  // const [todos, setTodos] = useState([])
  const [value, setValue] = useState('')

  //useReducer receives 2 params, 1st is reducer() 2nd is initial State
  const [todos, dispatch] = useReducer(reducer, [])
  const handleChange = event => {
    setValue(event.target.value)
  }
  const handleSubmit = event => {
    event.preventDefault()
    dispatch({ type: 'submit', payload: value })
    //Clear the input
    setValue('')
  }
  const handleDelete = id => {
    dispatch({ type: 'delete', payload: id })
  }
  return (
    <div id="todoList">
      <h1>Simple Todo list App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
      </form>
      <ul>
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              <span className="btn btn-primary mr-3">{todo.value}</span>
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => {
                  handleDelete(todo.id)
                }}
              >
                Delete
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
