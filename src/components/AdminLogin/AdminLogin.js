import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login, logout, selectAdmin } from "../../features/admin/adminSlice";
import { auth } from "../../firebase";
import "./AdminLogin.css";

const AdminLogin = () => {
	let history = useHistory();
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signin = () => {
		auth
			.signInWithEmailAndPassword(email, password)
			.then((res) => {
				history.push("/Admin/userlist");
			})
			.catch((error) => {
				console.log(error.message);
			});
	};

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch(
					login({
						email: authUser.email,
						password: authUser.password,
					})
				);
			} else {
				dispatch(logout());
			}
		});
	}, [dispatch]);
	return (
		<div className="adminLogin">
			<img src="https://i.ibb.co/bmgTN0m/Group-1329.png" alt="logo" />
			<div className="adminLogin_container">
				<div className="adminLogin_form">
					<h2>Login With</h2>
					<h4>Email</h4>
					<input
						type="email"
						placeholder="admin@admin.com"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
					<h4>Password</h4>
					<input
						type="password"
						placeholder="123456"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					/>
					<button className="btn btn-success" onClick={signin}>
						Login
					</button>
				</div>
			</div>
		</div>
	);
};

export default AdminLogin;
