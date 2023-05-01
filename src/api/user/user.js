import axios from '~/api/axios.js'
import { COMPANY_ID, TEST_USER_LOGIN, TEST_USER_PASSWORD } from '@env'

const defaultUser = {
  login: TEST_USER_LOGIN || '',
  password: TEST_USER_PASSWORD || ''
}

export default {
  async authByCode({ login, password } = defaultUser) {
    try {
      const response = await axios('/v1/auth', {
        method: 'POST',
        params: {
          login,
          password
        }
      })

      const data = await response.data

      if (Array.isArray(data.meta) && data.meta.length > 0) {
        return {
          data: [],
          error: data.meta.join(', ')
        }
      }

      return {
        data: data.data,
        error: false
      }
    } catch (error) {
      return {
        data: [],
        error: error.message
      }
    }
  }

  // async authByEmail({ login, password }) {
  //   try {
  //     const request = await axios('https://api.yclients.com/api/v1/auth', {
  //       method: 'POST',
  //       params: {
  //         login,
  //         password
  //       }
  //     })

  //     return request.data
  //   } catch (error) {
  //     return error.message
  //   }
  // }
}
