// action
import { successInitializedPcList, successAddPcList } from './action'

// api
import { apiGetPcList, apiPostPc } from './api'

// helpers
import { clientTokenCheck } from '../../helpers/utils'


export const initializedPcList = () => async (dispatch) => {
  try {
    const token = clientTokenCheck()

    const pcList = await apiGetPcList(token)
    dispatch(successInitializedPcList(pcList))
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
