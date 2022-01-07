import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3001'
})

export const register = async (data) => {
  return await instance.post(`/api/auth/register`, data).then(res => res.data)
}

export const login = async (data) => {
  return await instance.post(`/api/auth/login`, data).then(res => res.data)
}

const userApi = {
  register,
  login
}

export default userApi