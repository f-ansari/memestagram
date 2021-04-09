import { createStore, combineReducers, applyMiddleware } from 'redux'
import PostReducer from './reducers/PostReducers'
import CommentReducer from './reducers/CommentReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
  combineReducers({
    postState: PostReducer,
    commentState: CommentReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
