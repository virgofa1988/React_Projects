import React, { useState } from 'react'
import { SVGClosedEye, SVGOpenedEye } from 'src/assets/svgs/svg'
import * as S from './inputPassword.style'
export default function InputPassword({ ...props }) {
  const [focus, setFocus] = useState(false)
  const [visiblePassword, setVisiblePassword] = useState(true)

  const toggleVisiblePassword = () => {
    setVisiblePassword(visiblePassword => !visiblePassword)
  }
  return (
    <S.FormControl focus={focus}>
      <input
        type={visiblePassword ? 'password' : 'text'}
        {...props}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      <button type="button" onClick={toggleVisiblePassword} tabIndex="-1">
        {visiblePassword && <SVGClosedEye />} {!visiblePassword && <SVGOpenedEye />}
      </button>
    </S.FormControl>
  )
}
