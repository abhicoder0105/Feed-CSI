import React, { useState } from "react";
import Validation from "./Validation";
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom';
import {setUsers} from '../../redux/actions/userActions'
import './SignUp.css'

const Signup = () => {

  const dispatch = useDispatch();
  const history = useHistory();
 

	const [values, setValues] = useState({
		fullName: "",
		email: "",
		password: "",
	});

	const [errors, setErrors] = useState({});

	const handleChange = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value,
		});
	};



	const handleSubmit = (event) => {
		event.preventDefault();
		setErrors(Validation(values));   
    dispatch(setUsers(values))
      history.push('./feed')         
	};
  
	return (
		<div className="container">
			<div className="app-wrapper">
				<div>
					<h2 className="title">SignUp</h2>
				</div>
				<form className="form-wrapper">
					<div className="name">
						<label className="label">Full Name</label>
						<input
							type="text"
							className="input"
							name="fullName"
							value={values.fullName}
							onChange={handleChange}
						/>
						{errors.fullName && <p>{errors.fullName}</p>}
					</div>
					<div className="name">
						<label className="label">Email</label>
						<input
							type="email"
							className="input"
							name="email"
							value={values.email}
							onChange={handleChange}
						/>
						{errors.email && <p>{errors.email}</p>}
					</div>
					<div className="name">
						<label className="label">Password</label>
						<input
							type="password"
							className="input"
							name="password"
							value={values.password}
							onChange={handleChange}
						/>
						{errors.password && <p>{errors.password}</p>}
					</div>
		
         
          <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        
        
        
				</form>
			</div>
		</div>
	);
};

export default Signup;
