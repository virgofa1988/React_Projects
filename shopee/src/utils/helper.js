export const isEmail = value => {
  return /^\S+@\S+\.\S+$/.test(value)
}

//Currying Higher Order Component
export const payLoadCreator = asyncFunc => async (data, thunkAPI) => {
  try {
    const result = asyncFunc(data)
    return result
  } catch (err) {
    return thunkAPI.rejectWithValue(err)
  }
}

//Encode string, replace space and % out of string
export const generateNameId = ({ name, _id }) =>
  encodeURIComponent(`${name.replace(/\s+/g, '-').replace(/%/g, '').toLowerCase()}-i.${_id}`)
