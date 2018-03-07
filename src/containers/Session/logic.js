import { successInitializedRoomInfo, addNewSocket } from './action'
import { successInitializedPublicMessages, successUpdateMessageToPublic } from '../PublicMessage/action'
import { logout } from '../App/action'
import { apiGetRoomInfoById, apiGetPublicMessage } from './api'
import { clientTokenCheck } from '../../helpers/utils'

import io from 'socket.io-client'

const endpoint = 'http://localhost:5000'


export const initializedRoomInfo = (props) => async (dispatch) => {
  try {
    const roomId = localStorage.getItem('roomId')
    const accessToken = localStorage.getItem('accessToken')

    // roomIdがない場合，Lobbyに遷移
    if (!roomId) {
      props.history.push('/')
      return
    }

    const token = clientTokenCheck()

    // 部屋情報の取得
    const roomInfo = await apiGetRoomInfoById(token, roomId)
    dispatch(successInitializedRoomInfo(roomInfo))

    // 全体チャットの取得
    const publicMessage = await apiGetPublicMessage(token, roomId)
    dispatch(successInitializedPublicMessages(publicMessage))

    // socket通信開始
    const socket = io(endpoint)
    dispatch(addNewSocket(socket))
    socket.emit('connected', {
      roomId: roomId,
      accessToken: accessToken,
    })
  } catch (err) {
    const statusCode = err.status

    if (statusCode === 401) {
      localStorage.clear()
      dispatch(logout())
    }
  }
}

export const updateMessage = (messageInfo) => (dispatch) => {
  // TODO public | private | group でdispatch先を分ける
  // const messageType = messageInfo.messageType

  dispatch(successUpdateMessageToPublic(messageInfo))
}
