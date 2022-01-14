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

const taskApi = {
  addTask,
  getTodayTasks,
  updateTask
}

export default taskApi