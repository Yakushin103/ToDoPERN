import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import taskApi from '../../api/taskApi'
import {
  addTask,
  getTodayTasks,
  updateTask,
  removeTask,
  getWeekTasksList,
  getSearchTasksList,
  getAnalyticsData
} from './reducer'

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

export const removeTaskThunk = createAsyncThunk(
  'taskList/removeTaskThunk',
  async (arg, { dispatch }) => {
    try {
      const { data } = await taskApi.removeTask(arg)
      if (data.serverStatus === 2) {
        dispatch(removeTask(arg))
        toast.success('Данные были удаленны')
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

export const getWeekTasksListThunk = createAsyncThunk(
  'taskList/getWeekTasksList',
  async (arg, { dispatch }) => {
    try {
      const { list } = await taskApi.getWeekTasksList()
      dispatch(getWeekTasksList(list))
    } catch (err) {
      // dispatch(getWeekTasksList([]))
      toast.error('Что то пошло не так!')
    }
  }
)

export const getSearchTasksListThunk = createAsyncThunk(
  'taskList/getSearchTasksList',
  async (arg, { dispatch }) => {
    try {
      const { list } = await taskApi.getSearchTasksList(arg)
      dispatch(getSearchTasksList(list))
    } catch (err) {
      dispatch(getSearchTasksList([]))
      toast.error('Что то пошло не так!')
    }
  }
)

export const getAnalyticsDataThunk = createAsyncThunk(
  'taskList/getAnalyticsData',
  async (arg, { dispatch }) => {
    try {
      const { data } = await taskApi.getAnalyticsData()
      dispatch(getAnalyticsData(data))
    } catch (err) {
      dispatch(getAnalyticsData([50, 50]))
      toast.error('Что то пошло не так!')
    }
  }
)



