export const handleAddRoomPcInfo = (fkPcId) => async (dispatch, getState) => {
  try {
    // メッセージ送信
    const { socket } = getState().Session
    socket.addRoomPcInfo(fkPcId)
  } catch (err) {
    console.log(err)
  }
}
