import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

const getInitialStore = () => ({
  isAuth: Cookies.get('isAuth') ? Cookies.get('isAuth') : false,
  user: Cookies.get('user') ? JSON.parse(Cookies.get('user')) : {}
})

const mainSlice = createSlice({
  name: 'user',
  initialState: getInitialStore(),
  reducers: {
    auth: (store, { payload }) => {
      store.isAuth = payload
    },
    login: (store, { payload }) => {
      store.user = payload
    }
  }
})

export const {
  auth,
  login
} = mainSlice.actions

export default mainSlice.reducer