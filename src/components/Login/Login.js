import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { login, logout, selectUser } from "../../features/user/userSlice";
import { auth, googleProvider } from "../../firebase";
import "./Login.css";

const Login = () => {
	let history = useHistory();
	let location = useLocation();
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const signin = () => {
		auth
			.signInWithPopup(googleProvider)
			.then((res) => {
				setToken();
				history.replace(from);
			})
			.catch((err) => alert(err.message));
	};

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch(
					login({
						uid: authUser.uid,
						photo: authUser.photoURL,
						email: authUser.email,
						displayName: authUser.displayName,
					})
				);
			} else {
				dispatch(logout());
			}
		});
	}, [dispatch]);

	const setToken = () => {
		auth.currentUser
			.getIdToken(/* forceRefresh */ true)
			.then(function (idToken) {
				sessionStorage.setItem("token", idToken);
			})
			.catch(function (error) {
				// Handle error
			});
	};

	let { from } = location.state || { from: { pathname: `/` } };
	return (
		<div className="login">
			<img src="https://i.ibb.co/bmgTN0m/Group-1329.png" alt="logo" />
			<div className="login_container">
				<div className="login_form">
					<h2>Login With</h2>
					<button onClick={signin}>Continue with Google</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
