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
import { successSetRoomPcInfo } from '../RoomPcView/action'
import { logout } from '../App/action'

// api
import {
  apiGetUserInfoById,
  apiGetRoomInfoById,
  apiGetPublicMessage,
  apiGetPrivateMessage,
} from './api'

// helpers
import { clientTokenCheck } from '../../helpers/utils'


export const initializedRoomInfo = (props) => async (dispatch, getState) => {
  try {
    const roomId = localStorage.getItem('roomId')
    const accessToken = localStorage.getItem('accessToken')

    // roomIdがない場合，Lobbyに遷移
    if (!roomId) {
      props.history.push('/')
      return
    }

    const token = clientTokenCheck()

    // ユーザ情報取得
    const userInfo = await apiGetUserInfoById(token)

    // 部屋情報取得
    const roomInfo = await apiGetRoomInfoById(token, roomId)
    dispatch(successInitializedRoomInfo(roomInfo))

    // RoomのPC情報取得 (=> RoomPcView)
    dispatch(successSetRoomPcInfo(roomInfo.roomPcInfo))

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
      // メンバー情報と自ユーザ情報のfkUserIdを照合
      const _member = roomInfo.membersInfo.find(member =>
        member.userId === Number(userInfo.userId))

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
    ws.receiveUpdateRoomPcInfo(dispatch)

    // socketをstateに追加
    dispatch(addNewSocket(ws))

    // 初期化完了
    dispatch(successInitialized())
  } catch (err) {
    const statusCode = err.status

    if (statusCode === 401) {
      localStorage.clear()
      dispatch(logout())
    }
  }
}
