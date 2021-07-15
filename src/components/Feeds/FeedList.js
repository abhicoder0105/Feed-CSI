import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux';
import {removeSelectedPost} from '../../redux/actions/postActions'
import Comments from "../Comments/Comments";
import CommentBox from "../Comments/CommentBox";
import "./FeedList.css";

const FeedList = (props) => {
  
	const { image, caption, id } = props.posts;
  const dispatch = useDispatch();

	return (
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
					<span>Time</span>
				</div>
				<div className="update-feed">
					<Link to={`/editPost/${id}`}>
						<FontAwesomeIcon
							icon={faEdit}
							style={{ color: "gray", marginRight: 1 + "rem" }}
						/>
					</Link>
					<button
						className="btn btn-primary"
						onClick={() => dispatch(removeSelectedPost(id))}
					>
						<FontAwesomeIcon icon={faTrash} style={{ color: "grey" }} />
					</button>
				</div>
			</div>
			<div className="upload">
				<p>{caption}</p>
				<Link to={`/viewPost/${id}`}>
					<img src={image} alt="image not avaibale" />
				</Link>
			</div>
			<Comments />
			<div className="comment">
				<CommentBox placeholder={"Leave a comment"} />
			</div>
		</div>
	);
};

export default FeedList;
