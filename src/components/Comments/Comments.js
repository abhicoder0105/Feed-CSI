import React,{useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useSelector} from 'react-redux'
import moment from 'moment'
import {
	faClock
} from "@fortawesome/free-solid-svg-icons";
import './Comments.css'

const Comments = () => {

  const comments = useSelector((state)=> state.allComments.comments)
  console.log(comments)

  const timestamp = new Date();
  const date = new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp)
 
  const renderComments = comments.map((comment)=>{
  return (
    <div className='comment-list'>
    <div className="comment-heading" key={comment.id}>
      <div className='comment-image'>
      <img src="https://images.pexels.com/photos/556666/pexels-photo-556666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
      </div>
      <div className="comment-user">
      <h4>Naveen</h4>
      <FontAwesomeIcon icon={faClock}/>
      <span>{date}</span>
      </div>        
      </div>     
      <div className="comment-box">            
        <p>{comment.comments}</p>
      </div>
  </div>

   )})
   
  return(
    <>
    {renderComments}
    </>
  )
  
}

export default Comments;
