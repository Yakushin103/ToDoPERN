import { createSlice } from '@reduxjs/toolkit'

const getInitialStore = () => ({
  taskList: [],
  todayTaskList: []
})

const mainSlice = createSlice({
  name: 'taskList',
  initialState: getInitialStore(),
  reducers: {
    addTask: (store, { payload }) => {
      store.todayTaskList.push(payload)
    },
    updateTask: (store, { payload }) => {
      store.todayTaskList = store.todayTaskList.map(task => {
        if (task.id === payload.id) {
          return task = payload
        }
        return task
      })
    },
    getTodayTasks: (store, { payload }) => {
      store.todayTaskList = payload
    },
  }
})

export const {
  addTask,
  getTodayTasks,
  updateTask
} = mainSlice.actions

export default mainSlice.reducer