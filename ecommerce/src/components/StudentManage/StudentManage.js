import React, { Fragment, useState } from 'react'
import { Redirect, useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './StudentManage.scss'
import Student from './_Student'
import Input from './_Input'
import { path } from '../../Constant/path'
// import queryString from 'query-string'
import useQuery from '../../Hooks/useQuery'
export default function StudentManage({ isLogged }) {
  //Logic State
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  //State for Edit student
  const [currentStudent, setCurrentStudent] = useState(null)
  // const [student, setStudent] = useState({ name: '', age: '' })
  const [students, setStudents] = useState([])

  //Query Param URL - Install query-string npm
  //Step 1
  // const location = useLocation()
  // console.log(' location', location.search)
  // const parsedQuery = queryString.parse(location.search)
  // console.log('parsedQuery', parsedQuery)

  ////Step 2 - create hook - useQuery
  const query = useQuery()
  console.log('Query', query)

  //user type input, handleChange called (received setFunc are setName, or setAge, these setName or setAge received value from that input and setState)
  const handleChange = setFunc => value => setFunc(value)
  // const handleChange = e => {
  //   const { name, value } = e.target
  //   setStudent({ ...student, [name]: value })
  // }

  //Submit Form
  // const handleSubmit = e => {
  //   e.preventDefault()
  //   if (student.name !== '' && student.age !== '') {
  //     setStudents([...students, student])
  //   }
  // }
  const handleSubmit = e => {
    e.preventDefault()
    if (name !== '' && age !== '') {
      setStudents([...students, { id: new Date().toISOString(), name, age }])
    }
    //Reset Input
    setName('')
    setAge('')
  }
  //Delete
  const handleDelete = id => {
    const _student = students.filter(student => student.id !== id)
    setStudents(_student)
  }

  //Edit
  //Step 1: When click Edit=> Push student info into inputs//create Update/Back Button
  const handleStartEdit = id => {
    //Find student via id
    const _student = students.find(student => student.id === id)
    //Push info to input
    setName(_student.name)
    setAge(_student.age)
    //Set student into currentStudent
    setCurrentStudent(_student)
  }
  //Step 2: If edited and click update button
  const handleUpdate = () => {
    console.log(currentStudent)
    //2. Find the student in []
    const _studentsUpdate = students.map(student => {
      if (student.id === currentStudent.id) {
        //Nếu currentStudent trùng id với student trong mảng, trả lại trùng id, nhưng name, age là giá trị trong state vì user đã thay đổi info
        return { id: currentStudent.id, name, age }
        //Nếu ko trùng ID đang update, return về như ban đầu
      } else return student
    })
    console.log(_studentsUpdate)
    setStudents(_studentsUpdate)
    setName('')
    setAge('')
    setCurrentStudent(null)
  }
  //step 3: Handel Back
  const handleBack = () => {
    setName('')
    setAge('')
    setCurrentStudent(null)
  }
  // Check if isLogged, before rendering
  if (!isLogged) {
    return <Redirect to={path.register} />
  }
  return (
    <div className="StudentManagement">
      <h1 className="heading text-center">Quản lý sinh viên</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <Input
            value={name}
            name="name"
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
            onChange={handleChange(setName)}
            // onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age:
          </label>
          <Input
            value={age}
            type="number"
            name="age"
            className="form-control"
            id="age"
            placeholder="Enter age"
            onChange={handleChange(setAge)}
            // onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          {/* When User Update */}
          {currentStudent && (
            <div className="btn-group">
              <button type="button" className="btn btn-success" onClick={handleUpdate}>
                Update
              </button>
              <button type="button" className="btn btn-dark" onClick={handleBack}>
                Back
              </button>
            </div>
          )}
          {/* When User add new student */}
          {!currentStudent && <button className="btn btn-primary">Submit</button>}
        </div>
      </form>
      <div className="studentList">
        <ul>
          {students.map(student => {
            return (
              <Student
                key={student.id}
                student={student}
                handleDelete={handleDelete}
                handleStartEdit={handleStartEdit}
              />
            )
          })}
        </ul>
      </div>
    </div>
  )
}
