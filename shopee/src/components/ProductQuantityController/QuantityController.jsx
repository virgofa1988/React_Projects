import React, { useState } from 'react'
import { SVGDecreaseButton, SVGIncreaseButton } from 'src/assets/svgs/svg'
import * as S from './quantityController.style'
import PropTypes from 'prop-types'
export default function QuantityController({
  value,
  max,
  onChange,
  onIncrease,
  onDecrease,
  onInput,
  onBlur,
  disabled
}) {
  //HandleValue
  const handleInputChange = value => {
    let _value = Number(value)
    if (_value > max) {
      _value = max
    } else if (value < 1) {
      _value = 1
    }
    onChange && onChange(_value)
    onInput && onInput(_value)
  }
  // Increase / Decrease
  const increase = () => {
    let _value = value + 1
    if (_value > max) {
      _value = max
    }
    onChange && onChange(_value)
    onIncrease && onIncrease(_value)
  }
  const decrease = () => {
    let _value = value - 1
    if (_value < 1) {
      _value = 1
    }
    onChange && onChange(_value)
    onDecrease && onDecrease(_value)
  }
  const handleBlur = value => {
    onBlur && onBlur(Number(value))
  }
  return (
    <S.ControllerContainer>
      <S.ControllerButton
        onClick={() => {
          !disabled && decrease()
        }}
        disabled={disabled}
      >
        <SVGDecreaseButton />
      </S.ControllerButton>
      {/* Start Input */}
      <S.ControllerInput onChange={handleInputChange} value={value} onBlur={handleBlur} disabled={disabled} />
      {/* End Input */}
      <S.ControllerButton
        onClick={() => {
          !disabled && increase()
        }}
        disabled={disabled}
      >
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
