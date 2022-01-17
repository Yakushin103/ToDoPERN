import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3001'
})

export const addTask = async (data) => {
  return await instance.post(`/api/tasks/add`, data).then(res => res.data)
}

export const getTodayTasks = async (today) => {
  return await instance.get(`/api/tasks/all?today=${today}`).then(res => res.data)
}

export const updateTask = async (data) => {
  return await instance.post(`/api/tasks/update`, data).then(res => res.data)
}

export const removeTask = async (id) => {
  return await instance.delete(`/api/tasks/delete?id=${id}`).then(res => res.data)
}

export const getWeekTasksList = async () => {
  return await instance.get(`/api/tasks/week`).then(res => res.data)
}

export const getSearchTasksList = async (date) => {
  return await instance.get(`/api/tasks/search?date=${date}`).then(res => res.data)
}

export const getAnalyticsData = async () => {
  return await instance.get(`/api/tasks/analytics`).then(res => res.data)
}

const taskApi = {
  addTask,
  getTodayTasks,
  updateTask,
  removeTask,
  getWeekTasksList,
  getSearchTasksList,
  getAnalyticsData
}

export default taskApi