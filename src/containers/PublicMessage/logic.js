import { apiPostComment } from './api'
// import { successPostPublicMessage } from './action'
import { clientTokenCheck } from '../../helpers/utils'


export const handlePostPublicMessageComment = (inputRoomId, inputComment) => async (dispatch) => {
  try {
    const token = clientTokenCheck()

    // 正常に受理された場合新しくstateに追加
    const result = await apiPostComment(token, inputRoomId, inputComment)
    // dispatch(successPostPublicMessage(result))
  } catch (err) {
    // TODO コメント送信失敗時のエラーハンドリング
    console.log(err)
  }
}
