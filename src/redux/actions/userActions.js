import {ActionTypes} from '../constants/action-types'

export const setUsers = (values) => {    
      return{
        type: ActionTypes.SET_USERS,
        payload: values     
      };      
};

// export const selectedPost = (user) =>{
  
//   return{
//     type: ActionTypes.SELECTED_USER,
//     payload: user    
//   }
  
// }

