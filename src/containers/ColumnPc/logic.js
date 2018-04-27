export const handleUpdatePcInfo = (pcInfo) => (dispatch, getState) => {
  // socketでPC情報更新
  const { socket } = getState().Session
  socket.updatePcInfo(pcInfo)
}

export const handleUpdatePcInfoWithThumbnail = (pcInfo, imageFile) => (dispatch, getState) => {
  console.log('pcInfo', pcInfo)
  console.log(imageFile)
  // const { socket } = getState().Session
  // socket.updatePcInfoWithThumbnail(pcInfo, imageFile)
}

export const setChangeValue = (component, target, value) => {
  // TODO Session画面でのPC情報操作を実装する
  console.log(component)
  console.log(target, value)
}
