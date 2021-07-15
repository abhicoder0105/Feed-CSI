import React from "react";
import {Link} from 'react-router-dom';
import FeedList from "./FeedList";
import {useSelector, useDispatch} from 'react-redux'

import  "./Feed.css";

const Feed = () => {

  const posts = useSelector((state)=> state.allPosts.posts)
	return (
		<div className="container mb-4">
			<p className="heading">SOCIAL FEED</p>
			<h4>Here's What your connection posted</h4>
      <Link to='/addPost'><button className="btn btn-primary">Add Post</button></Link>
      {posts.reverse().map(postData =>
        <FeedList posts={postData} key={postData.id}/>        
        )}
      
      
			</div>
	);
};

export default Feed;
