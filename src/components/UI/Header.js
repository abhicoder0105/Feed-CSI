import React,{useState} from "react";
import { Link } from 'react-router-dom'
import { Navbar, Image } from "react-bootstrap";
import './Header.css'

const Header = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const users=
    {
    id: 1,
    name: 'Abhishek',
    email: 'abhishek@gmail.com',
    password: '123456'
  }
;

	return (
		<>
			<Navbar bg="dark" variant="dark">
        <Link to='/'>
        <Navbar.Brand href="#home">Simple Feed Page</Navbar.Brand>
        </Link>
			
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					{isLoggedIn && <Image
						style={{
							height: 2 + "rem",
							width: 2 + "rem",
							marginRight: 1 + "rem",
						}}
						src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg"
						rounded
					/>}
				{isLoggedIn ? 
        <Navbar.Text className="nav-text">
						<a href="#login">{users.name}</a>
            <Link to='/'>
            <a href="#logout" style={{marginLeft: 1+'rem'}}>Log Out</a>
            </Link>
					</Navbar.Text> 
      
         : 
        <Navbar.Text className="nav-text">
          <Link to='/'>
              <button className='btn btn-primary'>Show Feed</button>
         </Link>
						
					</Navbar.Text> }  	
          
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};

export default Header;
