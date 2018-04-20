export const handleUpdatePcInfo = (pcInfo) => (dispatch, getState) => {
  // socketでPC情報更新
  const { socket } = getState().Session
  socket.updatePcInfo(pcInfo)
}

export const setChangeValue = (component, target, value) => {
  // TODO Session画面でのPC情報操作を実装する
  console.log(component)
  console.log(target, value)
}
