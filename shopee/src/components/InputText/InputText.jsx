import React, { useState } from 'react'
import * as S from './inputText.style'
export default function InputText({...props}) {
  //State control onFocus
  const [focus,setFocus] = useState(true)

  return (
    <S.FormControl focus={focus}>
      <input {...props} onFocus={()=>setFocus(true)} onBlur={()=> setFocus(false)} />
    </S.FormControl>
  )
}
