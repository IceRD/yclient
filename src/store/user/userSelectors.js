import { createSelector } from '@reduxjs/toolkit'

export const selectUser = state => {
  return state.user.user
}

export const selectIsAuth = createSelector([selectUser], user => {
  return Object.keys(user).length !== 0
})
