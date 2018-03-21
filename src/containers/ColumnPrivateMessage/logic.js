export const handlePostMessageToPrivate = (channelId, content) => (dispatch, getState) => {
  try {
    const messageInfo = {
      messageType: 'private',
      channelId: channelId,
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
