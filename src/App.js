import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/UI/Header";
import Feed from "./components/Feeds/Feed";
import ViewPost from "./components/Feeds/ViewPost";
import EditPost from "./components/Feeds/EditPost";

// import SignUp from "./components/Users/SignUp";

import "./App.css";
import AddPost from "./components/Feeds/AddPost";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>					
          <Route path="/" exact>
						<Feed />
					</Route>
          <Route path="/addPost" exact>
						<AddPost />
					</Route>
          <Route path="/editPost/:id" >
						<EditPost/>
            </Route>
 
          <Route path="/viewPost/:id" exact>
						<ViewPost/>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
