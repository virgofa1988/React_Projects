import React, { useState } from 'react'
import { SVGDecreaseButton, SVGIncreaseButton } from 'src/assets/svgs/svg'
import * as S from './quantityController.style'
import PropTypes from 'prop-types'
export default function QuantityController({ value, max, onChange }) {
  //HandleValue
  const handleInputChange = value => {
    let _value = Number(value)
    if (_value > max) {
      _value = max
    } else if (value < 1) {
      _value = 1
    }
    onChange && onChange(_value)
  }
  // Increase / Decrease
  const increase = () => {
    let _value = value + 1
    if (_value > max) {
      _value = max
    }
    onChange && onChange(_value)
  }
  const decrease = () => {
    let _value = value - 1
    if (_value < 1) {
      _value = 1
    }
    onChange && onChange(_value)
  }
  return (
    <S.ControllerContainer>
      <S.ControllerButton onClick={decrease}>
        <SVGDecreaseButton />
      </S.ControllerButton>
      {/* Start Input */}
      <S.ControllerInput onChange={handleInputChange} value={value} />
      {/* End Input */}
      <S.ControllerButton onClick={increase}>
        <SVGIncreaseButton />
      </S.ControllerButton>
    </S.ControllerContainer>
  )
}
QuantityController.propTypes = {
  value: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func
}
