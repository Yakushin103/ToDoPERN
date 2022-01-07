import { createSlice } from '@reduxjs/toolkit'

const getInitialStore = () => ({
  isAuth: false,
  user: {}
})

const mainSlice = createSlice({
  name: 'user',
  initialState: getInitialStore(),
  reducers: {
    auth: (store, { payload }) => {
      store.isAuth = payload
    },
  }
})

export const {
  auth
} = mainSlice.actions

export default mainSlice.reducer