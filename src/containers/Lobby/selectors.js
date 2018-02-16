import { createSelector } from 'reselect'


const selectLobby = (state) => state.Lobby


export const makeSelectIsLoading = () => {
  return createSelector(selectLobby, s => s.isLoading)
}

export const makeSelectRooms = () => {
  return createSelector(selectLobby, s => s.rooms)
}
