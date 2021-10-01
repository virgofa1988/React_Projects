import React, { forwardRef, useEffect } from 'react'
import { useRef } from 'react'

//ref là một thuộc tính của một element tham chiếu đến element đó
//ref nhận vào 1 biến hoặc một function
//ref thường được dùng để truy cập DOM nodes
//useRef cũng dùng để lưu trữ 1 biến có thể mutate//lưu state để tránh component bị render lại
export default function DemoRefUseRef() {
  const pRef1 = useRef(null)
  const count = useRef(0)
  const inputRef = useRef(null)
  // const pRef2 = useRef(null)

  console.log(pRef1) // Null==> <p></p> in this step, not yet created.

  //When component finished rendering, <p></p> created
  useEffect(() => {
    console.log(pRef1)
  }, [])

  //DOM Node cua useRef
  const changeColor = () => {
    pRef1.current.style.color = 'red'
  }
  const changeCount = () => {
    count.current = count.current + 1
    if (count.current > 3) {
      console.log('This count is already greater than ', count.current)
    }
  }
  const changeInputBorderColor = () => {
    inputRef.current.style.borderColor = 'red'
  }
  // useRef cannot apply for component only element. instead we have to use forwardRef(), which is a HOC
  const InputRefCom = forwardRef((props, ref) => <input {...props} ref={ref} />)
  return (
    <div>
      {/* useRef received a value or callback function */}
      Use Reference
      <p ref={pRef1}>Hello Jay Nguyen 0</p>
      <p ref={pRef1}>Hello Jay Nguyen 1</p>
      <p ref={pRef1}>Hello Jay Nguyen 2</p>
      <p
        ref={element => {
          console.log(element)
        }}
      >
        Hello Jay Nguyen
      </p>
      <button onClick={changeColor}>Change Color</button>
      <button onClick={changeCount}>Change Count</button>
      <div>
        <InputRefCom ref={inputRef} />
        <button onClick={changeInputBorderColor}>Change Count</button>
      </div>
    </div>
  )
}
