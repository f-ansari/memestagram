import { CREATE_COMMENT, POST_ID } from '../types'

const iState = {
  username: '',
  comment: '',
  post_id: ''
}

const CommentReducer = (state = iState, action) => {
  switch (action.type) {
    case CREATE_COMMENT:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      }
    case POST_ID:
      return { ...state, post_id: action.payload, username: '', comment: '' }
    default:
      return { ...state }
  }
}

export default CommentReducer
