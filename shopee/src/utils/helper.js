export const isEmail = value => {
  return /^\S+@\S+\.\S+$/.test(value)
}

//Currying
export const payLoadCreator = asyncFunc => async (data, thunkAPI) => {
  try {
    const result = asyncFunc(data)
    return result
  } catch (err) {
    return thunkAPI.rejectWithValue(err)
  }
}
