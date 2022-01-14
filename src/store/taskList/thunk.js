import { createAsyncThunk } from '@reduxjs/toolkit'

import taskApi from '../../api/taskApi'
import { addTask, getTodayTasks, updateTask } from './reducer'

export const addNewTask = createAsyncThunk(
  'taskList/addTask',
  async (arg, { dispatch }) => {
    try {
      const { data } = await taskApi.addTask(arg)
      if (data.serverStatus === 2) {
        dispatch(addTask({ ...arg, id: data.insertId }))
      }
    } catch (err) {
      dispatch(addTask(null))
    }
  }
)

export const updateTaskThunk = createAsyncThunk(
  'taskList/updateTask',
  async (arg, { dispatch }) => {
    try {
      const { data } = await taskApi.updateTask(arg)
      if (data.serverStatus === 2) {
        dispatch(updateTask(arg))
      }
    } catch (err) {
      // dispatch(addTask(null))
    }
  }
)

export const getTodayTasksList = createAsyncThunk(
  'taskList/getTasksList',
  async (arg, { dispatch }) => {
    try {
      const { list } = await taskApi.getTodayTasks(arg)
      dispatch(getTodayTasks(list))
    } catch (err) {
      dispatch(getTodayTasks([]))
    }
  }
)