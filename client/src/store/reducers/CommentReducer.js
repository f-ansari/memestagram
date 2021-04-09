import { CREATE_COMMENT } from '../types'

const iState = {
  createComment: {
    username: '',
    comment: ''
  }
}

const CommentReducer = (state = iState, action) => {
  switch (action.type) {
    case CREATE_COMMENT:
      return {
        ...state,
        createComment: {
          ...state.createComment,
          [action.payload.name]: action.payload.value
        }
      }
    default:
      return { ...state }
  }
}

export default CommentReducer
