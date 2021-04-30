import React from "react"
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
} from "react-router-dom";
import Home from "./components/home";
import Navbar from "./components/navbar";
import UploadPage from "./components/upload";

function App() {
	return (
		<Router>
			<div>
				<Navbar></Navbar>
				<Switch>
					<Route exact path="/">
						<Home></Home>
					</Route>
					<Route path="/upload">
						<UploadPage></UploadPage>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
