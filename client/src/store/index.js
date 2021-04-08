import { createStore, combineReducers, applyMiddleware } from 'redux'
import PostReducer from './reducers/PostReducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
  combineReducers({
    postState: PostReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
