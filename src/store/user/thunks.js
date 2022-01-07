import { createAsyncThunk } from '@reduxjs/toolkit'

import userApi from '../../api/userApi'
import { auth } from './reducer'

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (arg, { dispatch }) => {
    try {
      const user = await userApi.register(arg)
      console.log('thunk', user)
      // dispatch(auth(true))
    } catch (err) {
      dispatch(auth(false))
    }
  }
)

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (arg, { dispatch }) => {
    try {
      const user = await userApi.login(arg)
      console.log('thunk', user)
      // dispatch(auth(true))
    } catch (err) {
      dispatch(auth(false))
    }
  }
)