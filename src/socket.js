import { successUpdateMessageToPublic } from './containers/PublicMessage/action'
import { successUpdateMessageToPrivate } from './containers/PrivateMessage/action'
import { updateActiveUsers } from './containers/Session/action'

import io from 'socket.io-client'

const endpoint = 'http://localhost:5000'


class webSocket {
  constructor() {
    this.socket = io(endpoint)
  }

  connected(roomId, accessToken) {
    this.socket.emit('connected', {
      roomId: roomId,
      accessToken: accessToken,
    })
  }

  disconnect() {
    this.socket.disconnect()
  }

  // メッセージ送信
  postMessage(messageInfo) {
    this.socket.emit('postMessage', messageInfo)
  }

  // メッセージ受け取り
  receiveMessage = (dispatch) => {
    // TODO public | private | group でdispatch先を分ける

    this.socket.on('receiveMessage', messageInfo => {
      dispatch(successUpdateMessageToPublic(messageInfo))
    })

    this.socket.on('receiveMessageToPrivate', messageInfo => {
      dispatch(successUpdateMessageToPrivate(messageInfo))
    })
  }

  // アクティブユーザ更新
  receiveActiveUser = (dispatch) => {
    this.socket.on('receiveActiveUser', activeUsers => {
      dispatch(updateActiveUsers(activeUsers))
    })
  }
}

export default webSocket
