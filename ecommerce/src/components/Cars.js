import React, { Component } from 'react'
import CarsData from '../data/cars.json'
import ClassButton from './ClassButton'

export default class Cars extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cars: CarsData,
      carImgUrl: './img/Cars/red-car.jpg'
    }
  }
  changeColor = carImg => {
    console.log(carImg)
    this.setState({ carImgUrl: carImg })
  }
  render() {
    return (
      <div className="CarsApp row">
        <div className="car col-8">
          <img className="w-100" src={this.state.carImgUrl} alt="carpicture" />
        </div>
        <div className="icon col-4 row d-flex align-content-center ">
          {this.state.cars.map((icon, index) => {
            return (
              <div className="img-div col-3">
                <ClassButton key={index} icon={icon} changeColor={this.changeColor} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
