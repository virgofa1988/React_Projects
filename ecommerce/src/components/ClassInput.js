import React, { Component } from 'react'

export default class ClassInput extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  componentDidMount() {
    console.log('ClassInput Did Mount')
  }
  componentDidUpdate() {
    console.log('ClassInput Did Update')
  }
  render() {
    return <input {...this.props} />
  }
}
