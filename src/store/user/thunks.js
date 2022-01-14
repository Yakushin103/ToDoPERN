import { createAsyncThunk } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

import userApi from '../../api/userApi'
import { auth, login } from './reducer'

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (arg, { dispatch }) => {
    try {
      const { user } = await userApi.register(arg)
      if (user.serverStatus === 2) {
        dispatch(auth(true))
        dispatch(login({ id: user.insertId, email: arg.email }))
        Cookies.set('isAuth', true)
        Cookies.set('user', JSON.stringify({ id: user.insertId, email: arg.email }))
      } else {
        dispatch(auth(false))
        Cookies.remove('isAuth')
        Cookies.remove('user')
      }
    } catch (err) {
      dispatch(auth(false))
      Cookies.remove('isAuth')
      Cookies.remove('user')
    }
  }
)

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (arg, { dispatch }) => {
    try {
      const user = await userApi.login(arg)
      dispatch(auth(true))
      dispatch(login(user))
      Cookies.set('isAuth', true)
      Cookies.set('user', JSON.stringify(user))
    } catch (err) {
      dispatch(auth(false))
      Cookies.remove('isAuth')
      Cookies.remove('user')
    }
  }
)