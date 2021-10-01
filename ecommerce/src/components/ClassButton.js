import React, { Component } from 'react'

export default class ClassButton extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  render() {
    const { icon, changeColor } = this.props
    return (
      <img
        className="w-100"
        src={icon.icon}
        onClick={() => {
          changeColor(icon.carImgUlr)
        }}
        alt="icon"
      />
    )
  }
}
