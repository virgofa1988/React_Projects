import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassInput from './ClassInput'
import ClassLayout from './ClassLayout'
export default class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'This is a Footer',
      number: 0,
      value: ''
    }
  }
  //Method
  click = () => {
    this.setState({ number: this.state.number + 1 })
  }

  //currying (to pass a param to onClick())
  clickCurrying = value => () => {
    this.setState({ number: value })
  }
  //If need to prevState
  clickPrevState = () => {
    this.setState(prevState => ({ number: prevState.number + 4 }))
  }

  //Onchange Input
  handleChanage = event => {
    // console.log(event.target.value)
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <footer>
        <button onClick={this.clickCurrying(991988)}>CLICK Currying</button>
        <button onClick={this.click}>CLICK Normal</button>
        <button onClick={this.clickPrevState}>CLICK PrevState</button>
        {this.state.title}
        {this.state.number}
        {this.props.name}

        <div className="onChangeDemo">
          <ClassInput type="text" onChange={this.handleChanage} value={this.state.value} />
          <ClassLayout>
            <p>{this.state.value}</p>
          </ClassLayout>
        </div>
      </footer>
    )
  }
}
//Check type of props when using them
Footer.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
}
