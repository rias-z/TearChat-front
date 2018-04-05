// action
import { successSetPcInfoList, successAddPcList } from './action'

// api
import {
  apiGetPcList,
  apiPostPc,
  apiUpdatePcInfo,
  apiPostPcThumbnail,
} from './api'

// helpers
import { clientTokenCheck } from '../../helpers/utils'


export const initializedPcList = () => async (dispatch) => {
  try {
    const token = clientTokenCheck()

    const pcInfoList = await apiGetPcList(token)
    dispatch(successSetPcInfoList(pcInfoList))
  } catch (err) {
    console.log(err)
  }
}

export const createPc = (pcInfo) => async (dispatch) => {
  try {
    const token = clientTokenCheck()

    const newPc = await apiPostPc(token, pcInfo)
    dispatch(successAddPcList(newPc))
  } catch (err) {
    console.log(err)
  }
}

// PC情報更新
export const handleUpdatePcInfo = (pcInfo) => async (dispatch) => {
  try {
    const token = clientTokenCheck()

    // update後のPCリスト
    const newPcInfoList = await apiUpdatePcInfo(token, pcInfo)

    dispatch(successSetPcInfoList(newPcInfoList))
  } catch (err) {
    console.log(err)
  }
}

// サムネ画像を変更した上で，PC情報更新
export const handleUpdatePcInfoWithThumbnail = (pcInfo, imageFile) => async (dispatch) => {
  try {
    const token = clientTokenCheck()

    // サムネ画像を保存してファイル名を取得
    const imageFilename = await apiPostPcThumbnail(token, imageFile)

    // PC情報にサムネ情報を追加する
    const pcInfoWithThumbnail = Object.assign({}, pcInfo, imageFilename)
    // update後のPCリスト
    const newPcInfoList = await apiUpdatePcInfo(token, pcInfoWithThumbnail)

    dispatch(successSetPcInfoList(newPcInfoList))
  } catch (err) {
    console.log(err)
  }
}
