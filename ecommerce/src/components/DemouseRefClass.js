import React, { Component, createRef } from 'react'

export default class DemoUserRefClass extends Component {
  constructor(props) {
    super(props)
    this.pRef = createRef(null)
    this.count = 0
  }
  changeColor() {
    this.pRef.current.style.color = 'red'
    console.log(this.pRef)
  }

  //useRef ngăn chặn render khi count thay đổi
  changeCount = () => {
    this.count = this.count + 1
    if (this.count === 3) {
      console.log('Count is ', this.count)
    }
  }
  render() {
    console.log('RefClass Render')
    return (
      <div>
        <p ref={this.pRef}>Jay Nguyen</p>
        <button onClick={this.changeColor}>Change Color</button>
        <button onClick={this.changeCount}>Change Count</button>
      </div>
    )
  }
}
