import io from 'socket.io-client'

// actions
import { successUpdateMessageToPublic } from './containers/ColumnPublicMessage/action'
import {
  successUpdateMessageToPrivate,
  updateActiveUsers
} from './containers/Session/action'


const endpoint = 'http://localhost:5000'


class WebSocket {
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

    this.socket.on('receiveMessageToPublic', messageInfo => {
      console.log('receiveMessageToPublic:', messageInfo)
      dispatch(successUpdateMessageToPublic(messageInfo))
    })

    this.socket.on('receiveMessageToPrivate', messageInfo => {
      dispatch(successUpdateMessageToPrivate(messageInfo))
    })
  }

  // メンバー更新
  receiveUpdateMembers = () => {
    this.socket.on('receiveUpdateMembers', members => {
      console.log('members:', members)
    })
  }

  // アクティブユーザ更新
  receiveActiveUser = (dispatch) => {
    this.socket.on('receiveActiveUser', activeUsers => {
      dispatch(updateActiveUsers(activeUsers))
    })
  }
}

export default WebSocket
