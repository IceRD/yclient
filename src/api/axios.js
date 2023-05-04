/* eslint-disable */
import axios from 'axios'
import { API_URL, PARTNER_TOKEN } from '@env'
import { isDevelopment } from '~/utils/environment.js'

axios.defaults.headers.common['Accept'] = 'application/vnd.yclients.v2+json'
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + PARTNER_TOKEN

axios.defaults.baseURL = API_URL
axios.defaults.timeout = 5000

axios.interceptors.request.use(
  function (request) {
    if (isDevelopment) {
      console.log({ request })
    }

    return request
  },
  function (error) {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  function (response) {
    if (isDevelopment) {
      console.log({ response })
    }

    return response
  },
  function (error) {
    if (error?.response?.data?.meta) {
      error.errorMsg = error.response.data.meta
    }

    if (isDevelopment) {
      console.log({ error })
    }

    return Promise.reject(error)
  }
)

export default axios

export function axiosError(error) {
  if (axios.isAxiosError(error) && error?.errorMsg) {
    return Object.values(error.errorMsg).join(', ')
  }

  return error.message
}
