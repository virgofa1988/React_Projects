import React, { Component } from 'react'
export default class ClassLayout extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  render() {
    return <div className="bg-red">{this.props.children}</div>
  }
}
