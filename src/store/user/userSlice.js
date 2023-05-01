import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {}
  },
  reducers: {
    setUser(state, { payload }) {
      const { user } = payload
      state.user = user
    },
    clearUser(state) {
      state.user = {}
    }
  }
})

export const { setUser, clearUser } = userSlice.actions

export default userSlice.reducer
