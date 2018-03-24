import { apiAddPc } from './api'


// actions
import { successAddPcToView } from '../PcView/action'


export const addPcToView = (pcInfo) => async (dispatch) => {
  try {
    const roomId = localStorage.getItem('roomId')
    const result = await apiAddPc(roomId, pcInfo)

    if (Object.keys(result).length > 0) {
      dispatch(successAddPcToView(result))
    } else {
      // TODO 既に登録されているポップアップを表示する
    }
  } catch (err) {
    console.log(err)
  }
}
