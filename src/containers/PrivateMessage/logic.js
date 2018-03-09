export const handlePostMessageToPrivate = (socket, channelId, content) => {
  try {
    const messageInfo = {
      messageType: 'private',
      channelId: channelId,
      content: content,
    }

    // メッセージ送信
    socket.postMessage(messageInfo)
  } catch (err) {
    // TODO コメント送信失敗時のエラーハンドリング
    console.log(err)
  }
}

