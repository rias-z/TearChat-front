import { successInitializedRoomInfo, addNewSocket } from './action'
import { successInitializedPublicMessages } from '../PublicMessage/action'
import { logout } from '../App/action'
import { apiGetRoomInfoById, apiGetPublicMessage } from './api'
import { clientTokenCheck } from '../../helpers/utils'

// socket
import webSocket from '../../socket'


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
    const ws = new webSocket()
    ws.connected(roomId, accessToken)
    ws.receiveMessage(dispatch)
    ws.receiveActiveUser(dispatch)

    dispatch(addNewSocket(ws))
  } catch (err) {
    const statusCode = err.status

    if (statusCode === 401) {
      localStorage.clear()
      dispatch(logout())
    }
  }
}
