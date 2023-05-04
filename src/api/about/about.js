import axios from '~/api/axios.js'
import { COMPANY_ID, TEST_USER_LOGIN, TEST_USER_PASSWORD } from '@env'

export default {
  async getAbout() {
    return await axios('/v1/company/397963/', {
      method: 'GET'
    })
  }
}
