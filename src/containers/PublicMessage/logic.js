export const handlePostMessageToPublic = (socket, content) => {
  try {
    const messageInfo = {
      messageType: 'public',
      content: content,
    }

    // メッセージ送信
    socket.postMessage(messageInfo)
  } catch (err) {
    // TODO コメント送信失敗時のエラーハンドリング
    console.log(err)
  }
}
