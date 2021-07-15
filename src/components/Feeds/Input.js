import React, { useState, useEffect } from "react";
import uuid from 'react-uuid'
import {useSelector,useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom'
import {setPosts} from '../../redux/actions/postActions';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFileImage,
	faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Input.css";

const Input = (props) => {

  const dispatch = useDispatch();
  const history = useHistory();


 
  const [caption, setCaption] = useState('')
	const [selectedFile, setSelectedFile] = useState();  
  
  const handleCaptionChange = (e)=>{
    setCaption(e.target.value)
  }  

	const fileSelectHandler = async (e) => {
		const file = e.target.files[0];
		const base64 = await convertBase64(file);
		setSelectedFile(base64);
	};

	const convertBase64 = (file) => {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader();
			fileReader.readAsDataURL(file);
			fileReader.onload = () => {
				resolve(fileReader.result);
			};
			fileReader.onerror = (error) => {
				reject(error);
			};
		});
	};

	const handleSubmit = (e) => {
    const post = {
      id: uuid(),
      image:selectedFile,
      caption
    }


    e.preventDefault()   
    dispatch(setPosts(post))
    history.push('/')	    
    }

	return (
		<div className="feed-box">
			<img
				src="https://iso.500px.com/wp-content/uploads/2019/12/Alina-By-Agata-Serge-.jpeg"
				alt=""
			/>
			<input type="text" placeholder={props.placeholder} value={caption} onChange={handleCaptionChange}/>
			<div class="image-upload">
				<label for="file-input">
					<FontAwesomeIcon
						className="icons"
						icon={faFileImage}
						title="upload file"
					/>       
				</label>
      
        
				<input id="file-input" type="file" onChange={fileSelectHandler} />
        </div>
      {selectedFile ? <span>Image Uploaded</span> : <span>Upload Image</span> }
      
			
			<FontAwesomeIcon
				className="icons"
				icon={faArrowCircleRight}
				title="submit"
				onClick={handleSubmit}
			/>
      { <span> Submit</span> }
		</div>

	);
};

export default Input;
