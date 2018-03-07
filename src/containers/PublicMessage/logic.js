import { apiPostMessageToPublic } from './api'


export const handlePostMessageToPublic = (socket, _message) => {
  try {
    const messageInfo = {
      messageType: 'public',
      content: _message,
    }

    // メッセージ送信
    apiPostMessageToPublic(socket, messageInfo)
  } catch (err) {
    // TODO コメント送信失敗時のエラーハンドリング
    console.log(err)
  }
}
