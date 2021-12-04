import { unwrapResult } from '@reduxjs/toolkit'

export const isEmail = value => {
  return /^\S+@\S+\.\S+$/.test(value)
}

//Currying Higher Order Component
export const payLoadCreator = asyncFunc => async (data, thunkAPI) => {
  try {
    const result = await asyncFunc(data)
    unwrapResult(result)
    return result
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
}

//Encode string, replace space and % out of string
export const generateNameId = ({ name, _id }) =>
  encodeURIComponent(`${name.replace(/\s+/g, '-').replace(/%/g, '').toLowerCase()}-i.${_id}`)

export const formatK = value => {
  const price = Number((Number(value) / 1000).toFixed(2))
  if (price > 1) {
    return price + 'K'
  }
  return value
}

//Get idProudct from URL, split will convert string to array at some marking seperator ex: "-i."
export const getIdProductFromURL = urlString => urlString.split('-i.')[1]

//Sale Percent price
export const rateSale = (originalPrice, salePrice) =>
  Math.round(((originalPrice - salePrice) / originalPrice) * 100) + '%'
