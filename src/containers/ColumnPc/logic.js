export const handleUpdatePcInfo = (pcInfo) => (dispatch, getState) => {
  // socketでPC情報更新
  const { socket } = getState().Session
  socket.updatePcInfo(pcInfo)
}
