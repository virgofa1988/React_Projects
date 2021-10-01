import React, { Component } from 'react'
import { path } from '../Constant/path'
import { Link, NavLink } from 'react-router-dom'

// Mock an API by using new Promise. fetchAPI will have method .then().catch()
const fetchAPI = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success')
    }, 2000)
  })

export default class Header extends Component {
  constructor(props) {
    super(props)
    // console.log(props)
    this.state = {
      count: 1
    }
    this.interval = null
  }
  componentDidMount() {
    //DidMount usually call API
    fetchAPI().then(res => {
      this.setState({ message: res })
    })
    console.log('Did Mount')
    document.body.addEventListener('click', this.click)
    // Interval still continue to setState -> Need to clear it in componentWillUnmount
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count + 1
      }))
    }, 2000)
  }
  componentWillUnmount() {
    //Cancel setTimeOut or Cancel Event or clear Interval
    console.log('Component Unmounted')
    clearInterval(this.interval)
    document.body.removeEventListener('click', this.click)
  }
  click = e => {
    console.log(e)
  }

  render() {
    return (
      <>
        {/* <div id="product">Message is : {this.state.count}</div> */}
        {/* NavLink support with active class, use for Menu for navigation 
        Link only for swith to new page
        */}
        <ul>
          <li>
            <NavLink to={path.home}>Home-NavLink</NavLink>
          </li>
          <li>
            <NavLink to={path.register}>Register-NavLink</NavLink>
          </li>
          <li>
            <NavLink to={path.student}>Student-NavLink</NavLink>
          </li>
          <li>
            <NavLink to={path.profile}>Profile-NavLink</NavLink>
          </li>
          {/* <li>
            <Link to={path.register}>Register-Link</Link>
          </li>
          <li>
            <Link to={path.student}>Student-Link</Link>
          </li> */}
          <button>Click to test</button>
        </ul>
      </>
    )
  }
}
