import { unwrapResult } from '@reduxjs/toolkit'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link,useHistory } from 'react-router-dom'
import { Button } from 'src/assets/styles/utils'
import ErrorMessage from 'src/components/ErrorMessage/ErrorMessage'
import InputPassword from 'src/components/InputPassword/InputPassword'
import InputText from 'src/components/InputText/InputText'
import { path } from 'src/constants/path'
import { rules } from 'src/constants/rules'
import {register} from '../../../Redux/auth.slice'
import * as S from './register.style'
export default function Register() {
  //React-Hook-Form to validate Form // Control use for custom Component
  const {control,handleSubmit,getValues,formState:{errors},setError} = useForm({
    defaultValues:{
      email:'',
      password:'',
      confirmPassword:''
    }
  })

  //When User filled the form and submit
  const dispatch = useDispatch()
const history = useHistory()


  const handleRegister = async (data) =>{
    const body = {
      email:data.email,
      password:data.password
    }
    try{
      const res = await dispatch(register(body))
      //When dispatch(register(data)) failed
      //unwrapResult will help to jupm to catch(err)
      unwrapResult(res)
      console.log(res)
      history.push(path.home)
    } catch(error){
      console.log(error)
      if(error.status == 422){
     //If many errors we need to use for and setErrors for all error
      for(const key in error.data){
        setError(key,{
          type:'server',
          message:error.data[key]
        })
      }
    }}
  }

  return (
    <div>
    <S.StyleRegister>
      <S.Container className='container'>
        <S.Banner></S.Banner>
        <S.FormWrapper>
          <S.FormTitle>Register</S.FormTitle>
          <S.Form noValidate onSubmit={handleSubmit(handleRegister)}>

            {/* Email Input */}
            <S.FormControl >
              <Controller name='email' control={control} rules={rules.email} render={({field})=>(<InputText error={errors['email'] && 'error'} type='email' name='email' placeholder="Email" onChange={field.onChange} value={getValues('email')}/>)} />
              <ErrorMessage errors={errors} name='email'/>
            </S.FormControl>

            {/* Password Input */}
            <S.FormControl>
            <Controller name='password' control={control} rules={rules.password} render={({field})=>(<InputPassword  name='password' placeholder="Password" onChange={field.onChange} value={getValues('password')}/>)} />
            <ErrorMessage errors={errors} name='password'/>
            </S.FormControl>

            {/* Confirm Password Input */}
            <S.FormControl> 
            <Controller name='confirmPassword' control={control} rules={{...rules.confirmPassword ,validate: {
                confirmPassword: confirmPassword => confirmPassword === getValues('password') || 'Password not the same'
              }}} render={({field})=>(<InputPassword  name='password' placeholder="Confirm Password" onChange={field.onChange} value={getValues('confirmPassword')}/>)} />            <ErrorMessage errors={errors} name='confirmPassword'/>
              </S.FormControl>

              {/* Button SubmitForm */}
            <S.FormButton>
              <Button type='submit'>Register</Button>
            </S.FormButton>

            {/* Footer */}
            <S.FormFooter>
              <span>Do you have Shopee Account?</span>
              <Link to={path.login} className='link'>Login</Link>
            </S.FormFooter>
          </S.Form>
        </S.FormWrapper>
      </S.Container>
    </S.StyleRegister>
    </div>
  )
}
