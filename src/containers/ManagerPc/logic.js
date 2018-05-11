// action
import { successSetPcInfoList, successAddPcList } from './action'

// api
import {
  apiGetPcList,
  apiPostPcInfo,
  apiUpdatePcInfo,
  apiPostPcInfoThumbnail
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

// PC作成
export const handlePostPcInfo = (pcInfo) => async (dispatch) => {
  try {
    const token = clientTokenCheck()

    // update後のPC情報
    const newPcInfo = await apiPostPcInfo(token, pcInfo)

    dispatch(successAddPcList(newPcInfo))
  } catch (err) {
    console.log(err)
  }
}

// サムネ画像を変更した上で，PC保存
export const handlePostPcInfoWithThumbnail = (pcInfo, imageFile) => async (dispatch) => {
  try {
    const token = clientTokenCheck()

    // サムネ画像を保存してファイル名を取得
    const imageFilename = await apiPostPcInfoThumbnail(token, imageFile)

    // PC情報にサムネ情報を追加する
    const pcInfoWithThumbnail = Object.assign({}, pcInfo, imageFilename)

    // update後のPC情報
    const newPcInfo = await apiPostPcInfo(token, pcInfoWithThumbnail)

    dispatch(successAddPcList(newPcInfo))
  } catch (err) {
    console.log(err)
  }
}

// PC情報更新
export const handleUpdatePcInfo = (pcInfo) => async (dispatch) => {
  try {
    const token = clientTokenCheck()

    // update後のPC情報リスト
    const pcInfoList = await apiUpdatePcInfo(token, pcInfo)

    dispatch(successSetPcInfoList(pcInfoList))
  } catch (err) {
    console.log(err)
  }
}

// サムネ画像を変更した上で，PC情報更新
export const handleUpdatePcInfoWithThumbnail = (pcInfo, imageFile) => async (dispatch) => {
  try {
    const token = clientTokenCheck()

    // サムネ画像を保存してファイル名を取得
    const imageFilename = await apiPostPcInfoThumbnail(token, imageFile)

    // PC情報にサムネ情報を追加する
    const pcInfoWithThumbnail = Object.assign({}, pcInfo, imageFilename)

    // update後のPC情報リスト
    const pcInfoList = await apiUpdatePcInfo(token, pcInfoWithThumbnail)

    dispatch(successSetPcInfoList(pcInfoList))
  } catch (err) {
    console.log(err)
  }
}
