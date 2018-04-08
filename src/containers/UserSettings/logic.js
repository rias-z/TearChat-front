// api
import { apiPostImage } from './api'
import { clientTokenCheck } from '../../helpers/utils'

// action
import { successUpdateThumbnail } from '../App/action'


export const handlePostImage = (image) => async (dispatch) => {
  try {
    const token = clientTokenCheck()

    const result = await apiPostImage(token, image)

    dispatch(successUpdateThumbnail(result.thumbnail))
  } catch (err) {
    console.log(err)
  }
}
