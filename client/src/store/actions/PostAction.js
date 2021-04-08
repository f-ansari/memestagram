import { __GetMapPost } from '../../services/PostService'
import { GET_POST } from '../types'

export const GetMapPost = () => async (dispatch) => {
  try {
    const posts = await __GetMapPost()
    dispatchEvent({
      type: GET_POST,
      payload: posts
    })
  } catch (error) {
    throw error
  }
}
