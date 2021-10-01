import React from 'react'
import './Register.scss'
import { useForm } from 'react-hook-form'

export default function Register() {
  const emailRegex = /^\S+@\S+\.\S+$/
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm({
    defaultValues: {
      name: 'Tuan',
      nation: 'vietnam',
      password: '',
      confirmpassword: '',
      gender: 'male',
      email: 'nguyenanhtuan@gmail.com',
      activities: ['swimming']
    }
  })

  //Submit Func
  const onSubmit = data => {
    //dispatch to API
    console.log('data', data)
  }

  //HandleClass
  //Neu error[name] có thông báo lỗi, thì thêm is-invalid class
  //baseClass = default la 'form-control' tru radio,checkbox and
  //name được dùng để kiểm tra xem input đó có lỗi trong errors
  const handleClass = (name, baseClass = 'form-control') => `${baseClass} ${errors[name] ? 'is-invalid' : ''}`
  console.log('errors', errors)
  return (
    <div className="form-container">
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        {/* Email */}
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className={handleClass('email')}
            name="email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            {...register('email', {
              required: { value: true, message: 'Please enter email' },
              validate: {
                email: value => emailRegex.test(value) || ' Not Email Format'
              }
            })}
          />
          {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
        </div>
        {/* Name */}
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label">
            Name
          </label>
          <input
            type="name"
            name="name"
            className={handleClass('name')}
            id="exampleInputName1"
            {...register('name', {
              required: {
                value: true,
                message: 'Please enter your name'
              },
              minLength: {
                value: 2,
                message: 'Length is 2-120 characters'
              },
              maxLength: {
                value: 120,
                message: 'Length is 2-120 characters'
              }
            })}
          />
          {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
        </div>
        {/* Radio Check */}
        <div className=" mb-3 nation ">
          <p>Nationality</p>
          <div className="mb-3 form-check">
            <input
              type="radio"
              name="nation"
              value="vietnam"
              className={handleClass('nation', 'form-check-input')}
              id="exampleCheckRadio1"
              {...register('nation', {
                required: {
                  value: true,
                  message: 'Please choose your nation'
                }
              })}
            />
            <label className="form-check-label" htmlFor="exampleCheckRadio1">
              Viet Nam
            </label>
          </div>
          <div className="mb-3 form-check">
            <input
              type="radio"
              name="nation"
              className={handleClass('nation', 'form-check-input')}
              value="oversea"
              id="exampleCheckRadio2"
              {...register('nation', {
                required: {
                  value: true,
                  message: 'Please choose your nation'
                }
              })}
            />
            <label className="form-check-label" htmlFor="exampleCheckRadio2">
              Oversea
            </label>
            {/* Error must place following input as Bootstrap css selector */}
            {errors.nation && <div className="invalid-feedback">{errors.nation.message}</div>}
          </div>
        </div>
        {/* Check Box */}
        <div className=" mb-3 activities">
          <p>Activities</p>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className={handleClass('activities', 'form-check-input')}
              id="exampleCheckBox1"
              name="activities"
              value="gym"
              {...register('activities', {
                required: {
                  value: true,
                  message: 'Please choose your activities'
                }
              })}
            />
            <label className="form-check-label" htmlFor="exampleCheckBox1">
              Gym
            </label>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className={handleClass('activities', 'form-check-input')}
              id="exampleCheckBox2"
              name="activities"
              value="swimming"
              {...register('activities', {
                required: {
                  value: true,
                  message: 'Please choose your activities'
                }
              })}
            />
            <label className="form-check-label" htmlFor="exampleCheckBox2">
              Swimming
            </label>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className={handleClass('activities', 'form-check-input')}
              id="exampleCheckBox3"
              name="activities"
              value="football"
              {...register('activities', {
                required: {
                  value: true,
                  message: 'Please choose your activities'
                }
              })}
            />
            <label className="form-check-label" htmlFor="exampleCheckBox3">
              Football
            </label>
            {/* Error must place following input as Bootstrap css selector */}
            {errors.activities && <div className="invalid-feedback">{errors.activities.message}</div>}
          </div>
        </div>
        {/* Gender */}
        <div className="mb-3 ">
          <select
            className={handleClass('activities', 'form-select')}
            name="gender"
            id="gender"
            {...register('gender', {
              required: {
                value: true,
                message: 'Please choose your sex'
              }
            })}
          >
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {/* Error must place following input as Bootstrap css selector */}
          {errors.gender && <div className="invalid-feedback">{errors.gender.message}</div>}
        </div>
        {/* Password */}
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className={handleClass('password')}
            id="exampleInputPassword1"
            aria-describedby="passwordHelp"
            {...register('password', {
              required: {
                value: true,
                message: 'Please enter your password'
              },
              minLength: {
                value: 6,
                message: 'Min is 6 characters'
              },
              maxLength: {
                value: 10,
                message: 'Min is 10 characters'
              }
            })}
          />
          {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
        </div>
        {/* Confirm Password */}
        <div className="mb-3">
          <label htmlFor="exampleConfirmPassword1" className="form-label">
            Confirm Password
          </label>
          <input
            type="confirmpassword"
            name="confirmpassword"
            className={handleClass('confirmpassword')}
            id="exampleConfirmPassword1"
            aria-describedby="passwordHelp"
            {...register('confirmpassword', {
              required: {
                value: true,
                message: 'Password not match'
              },
              minLength: {
                value: 6,
                message: 'Min is 6 characters'
              },
              maxLength: {
                value: 10,
                message: 'Min is 10 characters'
              },
              validate: {
                confirmPassword: confirmPass => confirmPass === getValues('password') || 'Password not the same'
              }
            })}
          />
          {errors.confirmpassword && <div className="invalid-feedback">{errors.confirmpassword.message}</div>}
        </div>
        {/* Submit Button only 1 / form */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}
