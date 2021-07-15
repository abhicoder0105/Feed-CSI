import React from "react";
import {useParams} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import Input from "./Input.js";
import Comments from "../Comments/Comments";
import "./FeedList.css";

const ViewPost = () => {

  const {postId} = useParams();
  console.log(postId);
  const posts = useSelector((state)=> state.allPosts.posts);  
  
  const finalPost = posts.filter((post)=> post.id === postId)
  console.log(finalPost[0]); 


  return (
    <div className="container">
        <div className="feed-list">
			<div className="feed-heading">
				<div className="feed-image">
					<img
						src="https://images.pexels.com/photos/556666/pexels-photo-556666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
						alt=""
					/>
				</div>
				<div className="feed-user">
					<h4>Abhishek Sharma</h4>
					<FontAwesomeIcon icon={faClock} />
					<span>{finalPost[0].id}</span>
				</div>        
			</div>
			<div className="upload">
				<p>What a beautiful surprise</p>
				<Link to="/viewPost">
					<img
						src={finalPost[0].image}
						alt=""
					/>
				</Link>
			</div>
			<Comments />
			<div className="comment">
				<Input placeholder={"Leave a comment"} />
			</div>
		</div>
    </div>
  )
}

export default ViewPost
