import React from 'react'
import { Controller, useForm } from 'react-hook-form'
//Reuse from Register for Login Page
import * as S from '../Register/register.style'
import ErrorMessage from 'src/components/ErrorMessage/ErrorMessage'
import InputPassword from 'src/components/InputPassword/InputPassword'
import InputText from 'src/components/InputText/InputText'
import { path } from 'src/constants/path'
import { rules } from 'src/constants/rules'
import { Button } from 'src/assets/styles/utils'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from 'src/Redux/auth.slice'
import { unwrapResult } from '@reduxjs/toolkit'

export default function Login() {
  //React-Hook-Form to validate Form // Control use for customed Component
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
    setError
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })
  const dispatch = useDispatch()
  const history = useHistory()
  const handleLogin = async data => {
    //API Login
    const body = {
      email: data.email,
      password: data.password
    }
    try {
      const res = await dispatch(login(body))
      unwrapResult(res)
      history.push(path.home)
    } catch (error) {
      if (error) {
        for (const key in error.data) {
          setError({
            type: 'server',
            message: error.data[key]
          })
        }
      }
    }
  }
  return (
    <div>
      <S.StyleRegister>
        <S.Container className="container">
          <S.Banner></S.Banner>
          <S.FormWrapper>
            <S.FormTitle>Login</S.FormTitle>
            <S.Form noValidate onSubmit={handleSubmit(handleLogin)}>
              {/* Email Input */}
              <S.FormControl>
                <Controller
                  name="email"
                  control={control}
                  rules={rules.email}
                  render={({ field }) => (
                    <InputText
                      error={errors['email'] && 'error'}
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={field.onChange}
                      value={getValues('email')}
                    />
                  )}
                />
                <ErrorMessage errors={errors} name="email" />
              </S.FormControl>

              {/* Password Input */}
              <S.FormControl>
                <Controller
                  name="password"
                  control={control}
                  rules={rules.password}
                  render={({ field }) => (
                    <InputPassword
                      name="password"
                      placeholder="Password"
                      onChange={field.onChange}
                      value={getValues('password')}
                    />
                  )}
                />
                <ErrorMessage errors={errors} name="password" />
              </S.FormControl>

              {/* Button SubmitForm */}
              <S.FormButton>
                <Button type="submit">Login</Button>
              </S.FormButton>

              {/* Footer */}
              <S.FormFooter>
                <span>You don't have Shopee Account</span>
                <Link to={path.register} className="link">
                  Register
                </Link>
              </S.FormFooter>
            </S.Form>
          </S.FormWrapper>
        </S.Container>
      </S.StyleRegister>
    </div>
  )
}
