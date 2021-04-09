import {
  __GetMapPost,
  __AddPost,
  __DeletePost,
  __GetOnePost
} from '../../services/PostService'
import {
  ADD_POST,
  GET_POST,
  CREATE_POST,
  DELETE_POST,
  POST_DETAILS
} from '../types'

export const GetMapPost = () => async (dispatch) => {
  try {
    const posts = await __GetMapPost()
    console.log(posts)
    dispatch({
      type: GET_POST,
      payload: posts
    })
  } catch (error) {
    throw error
  }
}

export const CreateNewPost = (formName, formValue) => ({
  type: CREATE_POST,
  payload: { name: formName, value: formValue }
})

export const AddPost = (formData) => async (dispatch) => {
  try {
    const create = await __AddPost(formData)
    dispatch({
      type: ADD_POST,
      payload: {
        username: create.username,
        image: create.image,
        caption: create.caption
      }
    })
  } catch (error) {}
}

export const DeletePost = (id) => async (dispatch) => {
  try {
    const deleted = await DeletePost(id)
    dispatch({
      type: DELETE_POST,
      payload: deleted
    })
  } catch (error) {
    throw error
  }
}

export const GetOnePost = (id) => async (dispatch) => {
  try {
    const post = await __GetOnePost(id)
    dispatch({
      type: POST_DETAILS,
      dispatch: post
    })
  } catch (error) {
    throw error
  }
}
