// api
import {
  apiPostPcInfoThumbnail
} from '../ManagerPc/api'

// helpers
import { clientTokenCheck } from '../../helpers/utils'


export const handleUpdatePcInfo = (pcInfo) => (dispatch, getState) => {
  // socketでPC情報更新
  const { socket } = getState().Session
  socket.updatePcInfo(pcInfo)
}

export const handleUpdatePcInfoWithThumbnail = (pcInfo, imageFile) =>
  async (dispatch, getState) => {
    const token = clientTokenCheck()
    // サムネ画像を保存してファイル名を取得
    const imageFilename = await apiPostPcInfoThumbnail(token, imageFile)

    // PC情報にサムネ情報を追加する
    const pcInfoWithThumbnail = Object.assign({}, pcInfo, imageFilename)

    const { socket } = getState().Session
    socket.updatePcInfo(pcInfoWithThumbnail)
  }
