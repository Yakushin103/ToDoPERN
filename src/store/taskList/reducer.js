import { createSlice } from '@reduxjs/toolkit'

const getInitialStore = () => ({
  task: []
})

const mainSlice = createSlice({
  name: 'task',
  initialState: getInitialStore(),
  reducers: {
    addTask: (store, { payload }) => {
      store.task.push(payload)
    },
  }
})

export const {
  addTask
} = mainSlice.actions

export default mainSlice.reducer