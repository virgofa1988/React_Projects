//Custom Hook để lấy prevState by using useRef

import React, { useEffect, useRef } from 'react'

export default function UsePrevious(value) {
  const ref = useRef()
  //useEffect la componentDiUpdate and DidMount
  //1st - return will run and ref.current is undefine
  //2nd - Component did mount, nen useEffect() run and assign value to ref.current which is "" (empty)
  //3nd - New value sent in, return will render, and return "", useEffect() run vi [value] change va ref.current = 'newValue'
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}
