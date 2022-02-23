import axios from 'axios'
import store from '@/store'

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_ENDPOINT,
  // In case that in need token
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
})

// Add a request interceptor for authorization
axiosInstance.interceptors.request.use(
  (config) => {
    store.commit('SET_LOADING', true)
    return config
  },
)

axiosInstance.interceptors.response.use(
  resp => {
    store.commit('SET_LOADING', false)
    return resp
  },
  error => {

    return Promise.reject(error)
  },
)

export const ApiService = {

  get (url, params = {}) {
    return axiosInstance.get(`${ url }`, { params })
  },

  post (url, body, config = {}) {
    return axiosInstance.post(`${ url }`, body, config)
  },

  put (url, body, params = {}) {
    return axiosInstance.put(`${ url }`, body, { params })
  },

  patch (url, body, config = {}) {
    return axiosInstance.patch(`${ url }`, body, config)
  },

  delete (url, params = {}) {
    return axiosInstance.delete(url, params)
  },
}


