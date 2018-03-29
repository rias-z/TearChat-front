import io from 'socket.io-client'

// actions
import { successUpdateMessageToPublic } from './containers/ColumnPublicMessage/action'
import {
  successUpdateMessageToPrivate,
  updateActiveUsers,
  updateMembersInfo,
} from './containers/Session/action'
import { successSetRoomPcInfo } from './containers/RoomPcView/action'


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

  /**
   * socket.emit
   */
  // メッセージ送信
  postMessage(messageInfo) {
    this.socket.emit('postMessage', messageInfo)
  }

  // RoomのPCリストにPCを追加
  addRoomPcInfo(fkPcId) {
    this.socket.emit('addRoomPcInfo', fkPcId)
  }

  // RoomのPCリストからPCを削除
  removeRoomPcInfo(fkPcId) {
    this.socket.emit('addRoomPcInfo', fkPcId)
  }

  /**
   * socket.on
   */
  // メッセージ受け取り
  receiveMessage = (dispatch) => {
    // TODO public | private | group でdispatch先を分ける

    this.socket.on('receiveMessageToPublic', messageInfo => {
      dispatch(successUpdateMessageToPublic(messageInfo))
    })

    this.socket.on('receiveMessageToPrivate', messageInfo => {
      dispatch(successUpdateMessageToPrivate(messageInfo))
    })
  }

  // メンバー更新
  receiveUpdateMembers = (dispatch) => {
    this.socket.on('receiveUpdateMembers', membersInfo => {
      dispatch(updateMembersInfo(membersInfo))
    })
  }

  // アクティブユーザ更新
  receiveActiveUser = (dispatch) => {
    this.socket.on('receiveActiveUser', activeUsers => {
      dispatch(updateActiveUsers(activeUsers))
    })
  }

  // RoomPcInfo更新
  receiveUpdateRoomPcInfo = (dispatch) => {
    this.socket.on('receiveUpdateRoomPcInfo', roomPcInfo => {
      dispatch(successSetRoomPcInfo(roomPcInfo))
    })
  }
}

export default WebSocket
