import React, { useState } from 'react'
import UsePrevious from './UsePrevious'

//Custom Hook
const useInputNumber = initialValue => {
  const [value, setValue] = useState(initialValue)
  const handleChange = e => {
    const regexNum = /^[0-9]*$/
    const val = e.target.value
    if (regexNum.test(val) || val === '') {
      // console.log(val)
      setValue(val)
    }
  }
  return [value, handleChange]
}

export default function CustomHook() {
  //Đây là custom Hook destructoring, tương tự useState, setValue is handleChange()
  const [value, setValue] = useInputNumber('')
  const [valueTextarea, setTextArea] = useInputNumber('')

  //Đầy là hàm sử dụng custom Hook để lấy prevState. vidu cua valueTextarea
  //Innitalvalue is ''
  const prevValueTextarea = UsePrevious(valueTextarea)
  console.log('preValue', prevValueTextarea)
  return (
    <div>
      <div className="user">
        <p>User</p>
        <input value={value} type="text" onChange={setValue} />
        <br />
        <textarea value={valueTextarea} onChange={setTextArea}></textarea>
      </div>
    </div>
  )
}
