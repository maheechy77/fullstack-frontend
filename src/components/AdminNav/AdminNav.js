import React from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import "./AdminNav.css";

const AdminNav = () => {
	const history = useHistory();
	const signOut = () => {
		auth.signOut();
		history.push("/");
	};
	return (
		<div className="adminNav">
			<div className="logo">
				<img src="https://i.ibb.co/bmgTN0m/Group-1329.png" alt="logo" />
			</div>
			<div className="admin_nav">
				<Link to="/Admin/userlist">User List</Link>
				<Link to="/Admin/add">Add New Activity</Link>
				<button className="btn btn-danger" onClick={signOut}>
					Log out
				</button>
			</div>
		</div>
	);
};

export default AdminNav;
