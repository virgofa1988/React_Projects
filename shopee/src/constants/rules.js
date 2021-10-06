//For validate
import { isEmail } from 'src/utils/helper'

export const rules = {
  email: {
    required: {
      value: true,
      message: 'Email is required'
    },
    minLength: {
      value: 5,
      message: 'Email length must from 5 - 160 characters'
    },
    maxLength: {
      value: 160,
      message: 'Email length must from 5 - 160 characters'
    },
    validate: {
      email: value => isEmail(value) || 'Wrong Email Format'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Password is required'
    },
    minLength: {
      value: 5,
      message: 'Password length must from 5 - 160 characters'
    },
    maxLength: {
      value: 160,
      message: 'Password length must from 5 - 160 characters'
    }
  },
  confirmPassword: {
    required: {
      value: true,
      message: 'Confirm Password is required'
    },
    minLength: {
      value: 5,
      message: 'Confirm Password length must from 5 - 160 characters'
    },
    maxLength: {
      value: 160,
      message: 'Confirm Password length must from 5 - 160 characters'
    }
  }
}
