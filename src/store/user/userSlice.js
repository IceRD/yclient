import { createSlice } from '@reduxjs/toolkit'
import { authByEmail } from './userReducers'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    isLoading: false,
    errors: false
  },
  reducers: {
    setUser(state, { payload }) {
      const { user } = payload
      state.user = user
    },
    clearUser(state) {
      state.user = {}
    }
  },
  extraReducers: builder => {
    builder
      .addCase(authByEmail.pending, state => {
        state.isLoading = true
        state.errors = false
      })
      .addCase(authByEmail.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.errors = false
        state.user = payload.user
      })
      .addCase(authByEmail.rejected, (state, { payload }) => {
        state.isLoading = false
        state.errors = payload.error
      })
  }
})

export const { setUser, clearUser } = userSlice.actions

export default userSlice.reducer
