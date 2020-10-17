import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./AdminDashboard.css";
import axios from "../../axios";
import { useHistory } from "react-router-dom";

const AdminDashboard = () => {
	const [userActivities, setUserActivities] = useState([]);
	const history = useHistory();
	const getData = () => {
		axios
			.get("/get/allUserActivityList")
			.then((res) => {
				setUserActivities(res.data);
			})
			.catch((err) => HTMLFormControlsCollection.log(err.message));
	};
	useEffect(() => {
		getData();
	}, []);

	const deleteRegistration = (title) => {
		axios
			.delete(`/delete/activity?title=${title}`)
			.then((res) => {
				history.push(`/Admin/add`);
			})
			.catch((err) => console.log(err.message));
	};

	return (
		<div className="dashboard">
			<h2>Dashboard</h2>
			{userActivities !== [] ? (
				<>
					<div className="userActivityList">
						<span className="head">
							<p>Username</p>
							<p>Email</p>
							<p>Registration Date</p>
							<p>Activity Name</p>
							<p>Action</p>
						</span>

						{userActivities.map((userActivity) => (
							<span className="body">
								<p>{userActivity.username}</p>
								<p>{userActivity.email}</p>
								<p>{userActivity.date}</p>
								<p>{userActivity.title}</p>
								<p>
									<input
										onClick={() => deleteRegistration(userActivity.title)}
										type="submit"
										className="btn btn-danger"
										value="Delete"
									/>
								</p>
							</span>
						))}
					</div>
				</>
			) : (
				<h2>No Data To Show</h2>
			)}
		</div>
	);
};

export default AdminDashboard;
