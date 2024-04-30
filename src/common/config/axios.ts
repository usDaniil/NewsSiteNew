import axios, { AxiosResponse } from 'axios'

import { readTokenFromLS } from '../lib/local-storage'



const baseApiService = axios.create({ baseURL: import.meta.env.VITE_APP_API_URL })
baseApiService.interceptors.response.use(
  (value):AxiosResponse<unknown> => value.data
)
baseApiService.interceptors.request.use(
  (config) => {
    const { headers } = config
    const token = readTokenFromLS()
    if (token) {
      headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)
export default baseApiService
