import {ActionTypes} from '../constants/action-types'


const initialState = {
    users: [   
 
  ]
}

export  const userReducer = (state=initialState,{type, payload}) =>{  
  switch (type) {
    case ActionTypes.SET_USERS:
      return {
        ...state,
        users: state.users.concat([payload])
      }
 
    default:
     return state;
  }
}
