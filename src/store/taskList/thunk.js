import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import taskApi from '../../api/taskApi'
import { addTask, getTodayTasks, updateTask } from './reducer'

export const addNewTask = createAsyncThunk(
  'taskList/addTask',
  async (arg, { dispatch }) => {
    try {
      const { data } = await taskApi.addTask(arg)
      if (data.serverStatus === 2) {
        dispatch(addTask({ ...arg, id: data.insertId }))
        toast.success('Данные добавлены')
      }
    } catch (err) {
      dispatch(addTask(null))
      toast.error('Что то пошло не так!')
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
        toast.success('Данные были обновлены')
      }
    } catch (err) {
      toast.error('Что то пошло не так!')
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
      toast.error('Что то пошло не так!')
    }
  }
)