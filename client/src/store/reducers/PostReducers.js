import {
  CREATE_POST,
  ADD_POST,
  DELETE_POST,
  GET_POST,
  POST_DETAILS,
  ADD_COMMENT,
  DELETE_COMMENT
} from '../types'

const iState = {
  mapPost: [],
  postDetails: [],
  createPost: {
    username: '',
    image: '',
    caption: ''
  }
}

const PostReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_POST:
      return { ...state, mapPost: action.payload }
    case CREATE_POST:
      return {
        ...state,
        createPost: {
          ...state.createPost,
          [action.payload.name]: action.payload.value
        }
      }
    case ADD_POST:
      return {
        ...state,
        mapPost: [...state.mapPost, action.payload]
      }
    case DELETE_POST:
      const mapPost = state.mapPost.filter(
        (destroyPost, i) => destroyPost.id !== action.payload.data.payload
      )
      return { ...state, mapPost }
    case POST_DETAILS:
      return { ...state, postDetails: action.payload }
    case ADD_COMMENT:
      const commentsArr = state.postDetails.comments
      commentsArr.push(action.payload)

      return {
        ...state,
        postDetails: { ...state.postDetails, comments: commentsArr }
      }
    case DELETE_COMMENT:
      const commentsArray = state.postDetails.comments
      const comment = commentsArray.filter(
        (destroyComment, i) => destroyComment.id !== action.payload.data.payload
      )
      return {
        ...state,
        postDetails: { ...state.postDetails, comments: comment }
      }
    default:
      return { ...state }
  }
}

export default PostReducer
