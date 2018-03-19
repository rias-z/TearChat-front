export const handlePostMessageToPublic = (content) => (dispatch, getState) => {
  try {
    const messageInfo = {
      messageType: 'public',
      channelId: 0,
      content: content,
    }

    // メッセージ送信
    const socket = getState().Session.socket
    socket.postMessage(messageInfo)
  } catch (err) {
    // TODO コメント送信失敗時のエラーハンドリング
    console.log(err)
  }
}