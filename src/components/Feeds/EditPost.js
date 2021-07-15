import React,{useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setSelectedPost} from '../../redux/actions/postActions'
import {useParams,useHistory,Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {	faFileImage,	faArrowCircleRight} from "@fortawesome/free-solid-svg-icons";

const EditPost = (props) => {  

  const dispatch = useDispatch();
  const history = useHistory();
  const {postId}= useParams();
  console.log(postId)

  const posts = useSelector((state)=> state.allPosts.posts)
  const post = posts.filter((post)=> post.id === postId)
  console.log(post[0])
  // const {image, caption, id} = post[0]

  const [inputImage, setInputImage] = useState(post[0].image)
  const [inputCaption, setInputCaption] = useState(post[0].caption)


 

  const fileSelectHandler = (e)=>{    
    setInputImage(e.target.files)        
  }

  const handleCaptionChange = e => {    
    setInputCaption(e.target.value)
  }

 
  const handleSubmit=(e) => {
      e.preventDefault()      
      dispatch(setSelectedPost({inputCaption,inputImage,postId}))
      history.push('/')
  }

  return (  

		<div className="feed-box">
			<img
				src="https://iso.500px.com/wp-content/uploads/2019/12/Alina-By-Agata-Serge-.jpeg"
				alt=""
			/>
			<input type="text" placeholder={props.placeholder} value={inputCaption} onChange={handleCaptionChange}/>
			<div class="image-upload">
				<label for="file-input">
					<FontAwesomeIcon
						className="icons"
						icon={faFileImage}
						title="upload file"
					/>
				</label>
				<input id="file-input" type="file"  onChange={fileSelectHandler} />
			</div>
      <Link to="/">
			<FontAwesomeIcon
				className="icons"
				icon={faArrowCircleRight}
				title="submit"
				onClick={handleSubmit}
			/>
      </Link>
		</div>
  )
}

export default EditPost
