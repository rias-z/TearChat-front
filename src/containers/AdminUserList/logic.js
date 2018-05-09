// api
import { apiGetAdminUserList, apiPutAdminUserList } from './api'

// actions
import {
  successInitializedAdminUserList,
  failedInitializedAdminUserList
} from './action'


export const initializedAdminUserList = () => async (dispatch) => {
  try {
    const result = await apiGetAdminUserList()

    dispatch(successInitializedAdminUserList(result))
  } catch (err) {
    console.log(err)
    dispatch(failedInitializedAdminUserList())
  }
}

export const handleChangeUserIsActive = (fkUserId, isActive) => async (dispatch) => {
  try {
    const result = await apiPutAdminUserList(fkUserId, isActive)

    dispatch(successInitializedAdminUserList(result))
  } catch (err) {
    console.log(err)
    dispatch(failedInitializedAdminUserList())
  }
}
