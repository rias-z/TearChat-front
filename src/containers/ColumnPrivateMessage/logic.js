export const handlePostMessageToPrivate = (channelId, content) => (dispatch, getState) => {
  try {
    const { selectFkPcId } = getState().OperationPc

    const messageInfo = {
      messageType: 'private',
      channelId: channelId,
      fkPcId: selectFkPcId,
      content: content,
    }

    // メッセージ送信
    const { socket } = getState().Session
    socket.postMessage(messageInfo)
  } catch (err) {
    // TODO コメント送信失敗時のエラーハンドリング
    console.log(err)
  }
}
