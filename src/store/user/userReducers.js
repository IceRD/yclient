import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { axiosError } from '~/api/axios.js'
import { TEST_USER_EMAIL, TEST_USER_PASSWORD } from '@env'

const defaultUser = {
  email: TEST_USER_EMAIL || '',
  password: TEST_USER_PASSWORD || ''
}

export const authByEmail = createAsyncThunk(
  'user/authByEmail',
  async function (user, { rejectWithValue }) {
    user = {
      login: user.email === '' ? defaultUser.email : user.email,
      password: user.password === '' ? defaultUser.password : user.password
    }

    try {
      const response = await axios('/v1/auth', {
        method: 'POST',
        data: {
          ...user
        }
      })

      const { data } = await response

      if (!data.success || (Array.isArray(data.meta) && data.meta.length > 0)) {
        throw new Error('Server error!')
      }

      return { user: data.data }
    } catch (error) {
      return rejectWithValue({ error: axiosError(error) })
    }
  }
)
