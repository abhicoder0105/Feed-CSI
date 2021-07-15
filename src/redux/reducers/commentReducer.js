import {ActionTypes} from '../constants/action-types'


const initialState = {
  comments: [{
    id: "1",
    comments: "badhiya hai"   
 
  }]
}



export  const commentReducer = (state=initialState,{type, payload}) =>{

  
  switch (type) {
    case ActionTypes.SET_COMMENTS:
      return {
        ...state,
        comments: state.comments.concat([payload])
      }
 
    default:
     return state;
  }
}