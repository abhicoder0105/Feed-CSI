import {combineReducers} from 'redux';
import {postReducer, selectedPostReducer} from '../reducers/postReducer'
import {commentReducer} from '../reducers/commentReducer'
import {userReducer} from '../reducers/userReducer'


 const rootReducer = combineReducers({
  allPosts:  postReducer,   
  allComments : commentReducer,
  allUsers : userReducer,
  
})




export default rootReducer;