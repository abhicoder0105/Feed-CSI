import React, { useState, useEffect } from "react";
import uuid from 'react-uuid';
import {useDispatch} from 'react-redux'
import {setComments} from '../../redux/actions/commentActions'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFileImage,
	faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import "./CommentBox.css";

const CommentBox = (props) => {

  const dispatch = useDispatch();
  
  const [commentInput, setCommentInput] = useState('');

  const handleCommentChange = (e)=>{
    setCommentInput(e.target.value)
  }

	const handleSubmit = (e) => {
    e.preventDefault();
    const comments = {
      id: uuid(),
      comments: commentInput
    }
    dispatch(setComments(comments))
    setCommentInput("")    
    }
	return (
		<div className="feed-box">
			<img
				src="https://iso.500px.com/wp-content/uploads/2019/12/Alina-By-Agata-Serge-.jpeg"
				alt=""
			/>
			<input type="text" placeholder={props.placeholder} value={commentInput} onChange={handleCommentChange}/>
		<FontAwesomeIcon
				className="icons"
				icon={faArrowCircleRight}
				title="submit"
				onClick={handleSubmit}
			/>
		</div>
	);
};

export default CommentBox;
