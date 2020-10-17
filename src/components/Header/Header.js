import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { selectUser } from "../../features/user/userSlice";
import { auth } from "../../firebase";
import "./Header.css";

const Header = () => {
	const user = useSelector(selectUser);
	const history = useHistory();
	const signOut = () => {
		auth.signOut();
		history.push("/");
	};

	return (
		<div className="header">
			<div className="header_logo">
				<img src="https://i.ibb.co/bmgTN0m/Group-1329.png" alt="logo" />
			</div>
			<div className="header_nav">
				<div className="header_navLink">
					<Link to="/">Home</Link>
					<Link to="/">Donation</Link>
					<Link to="/">Events</Link>
					<Link to="/">Blogs</Link>
				</div>
				<div className="header_navButton flex-start">
					{user ? (
						<>
							<button className="btn btn-warning" onClick={signOut}>
								Logout
							</button>
							<Link to={`/user/${user.uid}`}>
								<h4>{user.displayName}</h4>
							</Link>
						</>
					) : (
						<>
							<Link to="/login">
								<button className="btn btn-info headerBtn">Register</button>
							</Link>
							<Link to="/adminLogin">
								<button className="btn btn-success headerBtn">Admin</button>
							</Link>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
