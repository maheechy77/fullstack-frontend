import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectActivity } from "../../features/activity/activitySlice";
import { selectUser } from "../../features/user/userSlice";
import axios from "../../axios";
import "./Register.css";
import { useHistory } from "react-router-dom";

const Register = () => {
	const user = useSelector(selectUser);
	const activity = useSelector(selectActivity);

	const [date, setDate] = useState("");
	const [description, setDescription] = useState("");
	const history = useHistory();

	const registerActivity = (e) => {
		e.preventDefault();
		const getDate = date === "" ? "2020/10/10" : date;
		const getDes = description === "" ? activity.title : description;
		axios
			.post("/new/register", {
				uid: user.uid,
				username: user.displayName,
				email: user.email,
				date: getDate,
				activityImage: activity.image,
				activityTitle: activity.title,
				description: getDes,
			})
			.then((res) => {
				history.push(`/user/${user.uid}`);
			})
			.catch((err) => console.log(err.message));
	};

	// useEffect(() => {
	// 	registerActivity();
	// }, []);

	return (
		<div className="register">
			<div className="register_container">
				<div className="register_form">
					<h4>Register as A Volunteer</h4>

					<p className="register_input">
						Full Name:
						<input type="text" value={user?.displayName} />
					</p>
					<p className="register_input">
						Email:
						<input type="email" value={user?.email} />
					</p>
					<p className="register_input">
						Date:
						<input
							type="date"
							onChange={(e) => setDate(e.target.value)}
							value={date}
						/>
					</p>
					<p className="register_input">
						Description:
						<input
							type="text"
							onChange={(e) => setDescription(e.target.value)}
							value={description}
						/>
					</p>
					<p className="register_input">
						Activity Name:
						<input type="text" value={activity?.title} />
					</p>
					<button onClick={registerActivity}>Register</button>
				</div>
			</div>
		</div>
	);
};

export default Register;
