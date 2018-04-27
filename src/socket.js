import io from 'socket.io-client'

// action
import { successUpdateMessageToPublic } from './containers/ColumnPublicMessage/action'
import { successSetRoomPcInfo, successSetSelfRoomPcInfo } from './containers/RoomPcView/action'
import {
  successUpdateMessageToPrivate,
  updateActiveUsers,
  updateMembersInfo,
} from './containers/Session/action'

import { ENDPOINT } from './config/config'


class WebSocket {
  constructor() {
    this.socket = io(ENDPOINT)
  }

  // 接続時
  connected(roomId, accessToken) {
    this.socket.emit('connected', {
      roomId: roomId,
      accessToken: accessToken,
    })
  }

  // 退出時
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

  // RoomPC情報更新
  updatePcInfo(pcInfo) {
    this.socket.emit('updatePcInfo', pcInfo)
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
  receiveUpdateRoomPcInfo = (dispatch, selfUserId) => {
    this.socket.on('receiveUpdateRoomPcInfo', roomPcInfo => {
      dispatch(successSetRoomPcInfo(roomPcInfo))

      // 自分の操作PCをselfRoomPcInfoとして登録
      const selfRoomPcInfo = []
      roomPcInfo.forEach((pcInfo, idx) => {
        if (pcInfo.fkUserId.userId === selfUserId) {
          selfRoomPcInfo.push({
            fkPcId: pcInfo._id,
            idx: idx,
            pcInfo: pcInfo,
          })
        }
      })
      // RoomのPC情報取得 (=> RoomPcView)
      dispatch(successSetSelfRoomPcInfo(selfRoomPcInfo))
    })
  }
}

export default WebSocket
