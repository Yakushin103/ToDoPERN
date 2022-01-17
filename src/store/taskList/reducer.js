import { createSlice } from '@reduxjs/toolkit'

const getInitialStore = () => ({
  taskList: [],
  todayTaskList: [],
  weekList: [],
  searchList: []
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
    removeTask: (store, { payload }) => {
      store.todayTaskList = store.todayTaskList.filter(task => task.id !== payload)
    },
    getTodayTasks: (store, { payload }) => {
      store.todayTaskList = payload
    },
    getWeekTasksList: (store, { payload }) => {
      store.weekList = payload
    },
    getSearchTasksList: (store, { payload }) => {
      store.searchList = payload
    },
  }
})

export const {
  addTask,
  getTodayTasks,
  updateTask,
  removeTask,
  getWeekTasksList,
  getSearchTasksList
} = mainSlice.actions

export default mainSlice.reducer