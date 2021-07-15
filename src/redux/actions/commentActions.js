import {ActionTypes} from '../constants/action-types'

export const setComments = (comments) => {    
      return{
        type: ActionTypes.SET_COMMENTS,
        payload: comments     
      };      
};


