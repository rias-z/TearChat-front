export const successGetOmittedRooms = (rooms) => {
  return {
    type: 'SUCCESS_GET_OMITTED_ROOMS',
    rooms: rooms,
    isLoading: true
  }
}
