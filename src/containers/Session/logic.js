// socket
import WebSocket from '../../socket'

// action
import {
  successInitializedRoomInfo,
  addNewSocket,
  assignKp,
  successInitialized,
  assignSelfChannelId,
  successInitializedPrivateMessages
} from './action'
import { successInitializedPublicMessages } from '../ColumnPublicMessage/action'
import { logout } from '../App/action'

// api
import {
  apiGetRoomInfoById,
  apiGetPublicMessage,
  apiGetPrivateMessage,
} from './api'

// helpers
import { clientTokenCheck } from '../../helpers/utils'


export const initializedRoomInfo = (props) => async (dispatch, getState) => {
  try {
    const userId = localStorage.getItem('userId')
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

    // publicMessage取得
    const publicMessage = await apiGetPublicMessage(token, roomId)
    dispatch(successInitializedPublicMessages(publicMessage))

    // privateMessage取得
    const privateMessage = await apiGetPrivateMessage(token, roomId)
    dispatch(successInitializedPrivateMessages(privateMessage))

    // KPチェック
    const selfUserId = getState().App.userId
    const kpUserId = roomInfo.kpInfo.userId
    if (selfUserId === kpUserId) { dispatch(assignKp(true)) } else { dispatch(assignKp(false)) }

    // MemberのchannelIdチェック
    if (!getState().Session.isKp) {
      const _member = roomInfo.membersInfo.find(member => member.userId === Number(userId))
      const selfChannelId = _member.channelId
      dispatch(assignSelfChannelId(selfChannelId))
    } else {
      // KPの場合はchannelIdを0にセット
      dispatch(assignSelfChannelId(0))
    }

    // socket通信開始
    const ws = new WebSocket()
    ws.connected(roomId, accessToken)
    ws.receiveMessage(dispatch)
    ws.receiveActiveUser(dispatch)
    ws.receiveUpdateMembers(dispatch)
    dispatch(addNewSocket(ws))

    dispatch(successInitialized())
  } catch (err) {
    const statusCode = err.status

    if (statusCode === 401) {
      localStorage.clear()
      dispatch(logout())
    }
  }
}
