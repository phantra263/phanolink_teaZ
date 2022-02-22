import axios from 'axios'

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
    return config
  },
)

axiosInstance.interceptors.response.use(
  resp => {
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


