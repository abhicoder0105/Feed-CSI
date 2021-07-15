import {ActionTypes} from '../constants/action-types'

export const setPosts = (posts) => {    
      return{
        type: ActionTypes.SET_POSTS,
        payload: posts     
      };      
};

export const getSelectedPost = (id) =>{
  return{
    type: ActionTypes.GET_POST,
    payload: id 
  }
}


export const setSelectedPost = (post) =>{  
  return{
    type: ActionTypes.SELECTED_POST,
    payload: post   
  }
  
}

export const removeSelectedPost = (id) =>{  
  console.log(id)
  return{
    type: ActionTypes.REMOVE_SELECTED_POST  , 
    payload: id 
  }
  
}


