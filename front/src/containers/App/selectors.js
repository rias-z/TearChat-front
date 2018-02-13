import { createSelector } from 'reselect'


const selectApp = (state) => state.App

export const makeSelectIsTokenChecked = () =>
  createSelector(selectApp, s => s.is_token_checked)

export const makeSelectIsAuthenticated = () =>
  createSelector(selectApp, s => s.is_authenticated)

export const makeSelectUserId = () =>
  createSelector(selectApp, s => s.user_id)

export const makeSelectUserName = () =>
  createSelector(selectApp, s => s.user_name)

