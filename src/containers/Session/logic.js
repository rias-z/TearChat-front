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
import { successSetRoomPcInfo, successSetSelfRoomPcInfo } from '../RoomPcView/action'
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

    // roomIdがない場合，/に遷移
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
    // HACKME isKpをプロパティから取得するとなぜかエラーになる
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

    // RoomのPC情報取得 (=> RoomPcView)
    dispatch(successSetRoomPcInfo(roomInfo.roomPcInfo))

    // 自分の操作PCをselfRoomPcInfoとして登録
    const selfRoomPcInfo = []
    roomInfo.roomPcInfo.forEach((pcInfo, idx) => {
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

    // socket通信開始
    const ws = new WebSocket()
    // socket.onのセット
    ws.connected(roomId, accessToken)
    ws.receiveMessage(dispatch)
    ws.receiveActiveUser(dispatch)
    ws.receiveUpdateMembers(dispatch)
    ws.receiveUpdateRoomPcInfo(dispatch, selfUserId)

    // socketをstateに追加
    dispatch(addNewSocket(ws))

    // すべての処理を終えた後にisloadをtrueにする
    dispatch(successInitialized())
  } catch (err) {
    const statusCode = err.status

    console.log(err)

    if (statusCode === 401) {
      localStorage.clear()
      dispatch(logout())
    }
  }
}
