/* eslint-disable */
import axios from 'axios'
import { API_URL, PARTNER_TOKEN } from '@env'

axios.defaults.headers.common['Accept'] = 'application/vnd.yclients.v2+json'
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + PARTNER_TOKEN

axios.defaults.baseURL = API_URL

axios.interceptors.request.use(
  function (config) {
    console.log({ request: config })
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  function (response) {
    console.log({ response })
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default axios
