import { __AddComment } from '../../services/CommentService'
import { CREATE_COMMENT, ADD_COMMENT, POST_ID } from '../types'

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
