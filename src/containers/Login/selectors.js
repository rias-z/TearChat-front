import { createSelector } from 'reselect'


const selectApp = (state) => state.App


export const makeSelectIsAuthenticated = () => {
  return createSelector(selectApp, s => s.is_authenticated)
}
