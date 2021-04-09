import { __AddComment, __DeleteComment } from '../../services/CommentService'
import { CREATE_COMMENT, ADD_COMMENT, POST_ID, DELETE_COMMENT } from '../types'

export const CreateNewComment = (formName, formValue) => ({
  type: CREATE_COMMENT,
  payload: { name: formName, value: formValue }
})

export const AddComment = (formData) => async (dispatch) => {
  try {
    const comment = await __AddComment(formData)
    dispatch({
      type: ADD_COMMENT,
      payload: comment
    })
  } catch (error) {
    throw error
  }
}

export const SetPostId = (id) => ({
  type: POST_ID,
  payload: id
})

export const DeleteComment = (id) => async (dispatch) => {
  try {
    const destroy = await __DeleteComment(id)
    dispatch({
      type: DELETE_COMMENT,
      payload: destroy
    })
  } catch (error) {
    throw error
  }
}
