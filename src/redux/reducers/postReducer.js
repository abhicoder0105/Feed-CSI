import {ActionTypes} from '../constants/action-types'


const initialState = {
  posts: [{
    id: "1",
    image: "https://www.gstatic.com/webp/gallery/4.sm.webp",
    caption: "ram"
  }]
}

export  const postReducer = (state=initialState,{type, payload}) =>{  
  switch (type) {
    case ActionTypes.SET_POSTS:
      console.log('============', payload)
      return {
        ...state,
        posts: state.posts.concat([payload])
      }    
      case ActionTypes.GET_POST:
        let postDetails = state.posts.filter((post) => post.id === payload.id)
        console.log('============', postDetails, "========" , payload)
        return{
          ...state,
          post: (postDetails.length>0) ? postDetails[0] : {}
        }



      case ActionTypes.SELECTED_POST:
          return{
            ...state, 
            posts : state.posts.filter((post)=> post.id !== payload.id ? {...post, image : payload.image ,  caption : payload.caption }: post)
                }   
      
  
        case ActionTypes.REMOVE_SELECTED_POST:               
          console.log('============', payload, "I am deleting",)
          return{  
            ...state,
            posts: state.posts.filter(post => post.id !== payload.id)     
                }
            
        default:
          return state;
  }
  }







