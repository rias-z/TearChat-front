export const handlePostMessageToPublic = (content) => (dispatch, getState) => {
  try {
    const { selectFkPcId } = getState().OperationPcDisplay

    const messageInfo = {
      messageType: 'public',
      channelId: 0,
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
