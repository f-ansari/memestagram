import { CREATE_POST, ADD_POST, DELETE_POST, GET_POST } from '../types'

const iState = {
  createPost: {
    username: '',
    image: '',
    caption: ''
  },
  mapPost: []
}

const PostReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_POST:
      return { ...state, mapPost: action.paylaod }
    case CREATE_POST:
      return {
        ...state,
        createPost: {
          ...state.createPost,
          [action.paylaod.name]: action.payload.value
        }
      }
    case ADD_POST:
      return {
        ...state,
        mapPost: [...state.mapPost, { name: state.createPost }]
      }
    case DELETE_POST:
      const mapPost = state.mapPost.filter(
        (destroyPost, i) => destroyPost.id !== action.paylaod.data.item
      )
      return { ...state, ...mapPost }
    default:
      return { ...state }
  }
}