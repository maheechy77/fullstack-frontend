import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import ProtectedRoute from "./ProtectedRoute";
import Register from "./components/Register/Register";
import User from "./components/User/User";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import AdminNav from "./components/AdminNav/AdminNav";
import AddActivity from "./components/AddActivity/AddActivity";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/">
						<Header />
						<Home />
					</Route>
					<ProtectedRoute path="/register/:Id">
						<Header />
						<Register />
					</ProtectedRoute>
					<ProtectedRoute path="/user/:id">
						<Header />
						<User />
					</ProtectedRoute>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/adminLogin">
						<AdminLogin />
					</Route>
					<Route exact path="/Admin/userlist">
						<AdminNav />
						<AdminDashboard />
					</Route>
					<Route exact path="/Admin/add">
						<AdminNav />
						<AddActivity />
					</Route>
					<Route path="*">
						<Header />
						<h2>No Page Found</h2>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
